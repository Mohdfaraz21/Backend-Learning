require("dotenv/config");
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';


export default defineConfig({
  out: './drizzle',
  schema: './model/index.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "process.env.DATABASE_URL",
  },
});

module.exports = config;