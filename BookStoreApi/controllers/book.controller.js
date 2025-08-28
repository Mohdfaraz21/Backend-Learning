/* 
controllers are who are responsible for the interacting with models
*/
const { booksTable } = require("../models/book.model");
const db = require("../db");
const { eq, ilike } = require("drizzle-orm");

//@named exports
exports.getAllBooks = async function (req, res) {
  //@for search by name
  const search = req.query.search;
  if (search) {
    const books = await db
      .select()
      .from(booksTable)
      .where(ilike(booksTable.title, `%${search}%`));
    return res.json(books);
  }

  const books = await db.select().from(booksTable);
  return res.json(books);
};

exports.getBookById = async function (req, res) {
  const id = req.params.id;
  const book = await db
    .select()
    .from(booksTable)
    .where((table) => eq(table.id, id))
    .limit(1);

  if (!book) return res.status(404).json({ error: `Book was not found` });

  return res.json(book);
};

exports.createBook = async function (req, res) {
  const { title, authorId } = req.body;

  if (!title || title === "")
    return res.status(400).json({ error: "Title is required" });
  const [result] = await db
    .insert(booksTable)
    .values({ title, authorId, description })
    .returning({
      id: booksTable.id,
    });
  return res
    .status(200)
    .json({ message: "Book created success", id: result.id });
};

exports.deleteBookById = async function (req, res) {
  const id = req.params.id;

  await db.delete(booksTable).where(eq(booksTable.id, id));

  return res.status(200).json({ message: "book deleted" });
};
