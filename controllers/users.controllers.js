import connectDB from '../dataBase/aiven.js';

export const getUsers = async (req, res) => {
    const sql = connectDB();
    const data = await sql.query("SELECT * FROM users");
    console.log(data.rows);
    res.json(data.rows);
};