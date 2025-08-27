const {drizzle} = require("drizzle-orm/node-postgress")

//postgress://<username>:<password>@<host>"<port>/<db_name>
const db = drizzle(process.env.DATABASE_URL)

module.export = db