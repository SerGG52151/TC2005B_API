import fs from "fs";
import pg from "pg";

// const fs = require("fs");
// const pg = require("pg");
 
const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.BD_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./ca.pem").toString(),
  },
};

const connectDB = async () => {
  const client = new pg.Client(config);
  client.connect();
  return client;
}

export default connectDB;

/* Default exporta en forma de modulo la conexion a la base de datos */
// export default client.connect();