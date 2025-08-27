### setting up  ORM
- first make folder named **drizzle**
- on the root **docker-compose.yml**
- then root **drizzle.config.js**
- npm init -y
- npm i drizzle-orm pg
- make db folder inside this make **index.js** file

```javascript
db/index.js
const {drizzle} = require("drizzle-orm/node-postgress")

// postgress://<username>:<password>@<host>"<port>/<db_name>
const db = drizzle("postgress://postgress:admin@localhost:5431/mydb")

module.export = db
```

- in drizzle make **schema.js** and define your schema
- in **drizzle.config.js** 
- npm install drizzle-kit
- npm drizzle-kit push
- npm drizzle-kit studio