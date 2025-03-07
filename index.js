import "dotenv/config";
import express from 'express';
import indexRoutes from './routes/index.routes.js';
import userRoutes from './routes/users.routes.js';

// import connectDB from './dataBase/aiven.js';

const app = express();
const port = 5000

app.use(indexRoutes);
app.use(userRoutes);


/* This wont work until we have a database with actual tables */
// const sql = await connectDB();
// console.log(sql.query("SELECT * FROM users"));

app.use(indexRoutes)

app.listen(port, console.log("http://localhost:" + port));