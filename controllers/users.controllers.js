import connectDB from '../dataBase/aiven.js';

export const getUsers = async (req, res) => {
    const sql = await connectDB();
    const data = await sql.query("SELECT * FROM users");
    console.log(data.rows);
    res.json(data.rows);
};

export const getUser = async (req, res) => {
    const sql = await connectDB();
    const query = {
        text: "SELECT * FROM users WHERE user_id = $1",
        values: [req.params.id],
    };
    const data = await sql.query(query);
    console.log(data.rows[0]);
    res.json(data.rows[0]);
};

export const postUser = async (req, res) => {
    const {username, first_name, last_name, password} = req.body;
    const sql = await connectDB();
    const query = {
        text: "INSERT INTO users(username, first_name, last_name, password) VALUES($1, $2, $3, $4)",
        values: [username, first_name, last_name, password],
    };
    const data = await sql.query(query);
    res.send("User Added");
};

export const putUser = async (req, res) => {
    const {username, first_name, last_name, password, points} = req.body;
    const sql = await connectDB();
    const query = {
        text: "UPDATE users set username = $1, first_name = $2, last_name = $3, password = $4, points = $5 WHERE user_id = $6",
        values: [username, first_name, last_name, password, points, req.params.id],
    };
    const data = await sql.query(query);
    res.send("User Updated");
};

export const deleteUser = async (req, res) => {
    try {
        const sql = await connectDB();
        const query = {
            text: "DELETE FROM users WHERE user_id = $1",
            values: [req.params.id],
        };
        const data = await sql.query(query);
        // res.send("User Deleted");
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        res.status(500).json({msg: "Error 404"});
    }
};