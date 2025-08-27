const express = require("express");
const controller = require("../controllers/book.controller");
const router = express.Router();


router.get("/", controller.getAllBooks)
router.get("/books/:id", controller.getBookById);
router.post("/books", controller.createBook);
router.delete(":/id", controller.deleteBookById)

module.exports = router