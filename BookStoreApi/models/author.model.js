
const {pgTable, uuid, varchar, text} = require("drizzle-orm/pg-core");

const authorsTable = pgTable("authors", {
    id: uuid().primaryKey().defaultRandom(),
    firstName: varchar({length:55}).notNull(),
    lastName: varchar({length:55}).notNull(),
    email: varchar({length: 144}).notNull().unique()
})

module.exports = authorsTable;
