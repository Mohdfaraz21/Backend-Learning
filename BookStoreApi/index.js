require("dotenv/config");
const express = require("express");
const app = express();
const {loggerMiddleware} = require("./middleware/logger")

const bookRouter = require("./routes/book.routes")
const PORT = 8000;



//@Middleware
app.use(express.json());
app.use(loggerMiddleware)
//@Routes
app.use("/books", bookRouter)


app.listen(PORT, () => console.log(`Server is listen on PORT: ${PORT}`));
