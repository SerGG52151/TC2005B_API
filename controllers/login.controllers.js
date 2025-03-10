import connectDB from '../dataBase/aiven.js';

export const login = async (req, res) => {
    const sql = await connectDB();
    const query = {
        text: "SELECT * FROM users WHERE username = $1",
        values: [req.body.username],
    };
    const data = await sql.query(query);
    if(data.rows.length < 1){
        res.json({ isLogin: false, user: {}});
        return;
    }
    if(req.body.password === data.rows.password){
        res.json({ isLogin: true, user: data.rows});
        return;
    } else {
        res.json({ isLogin: false, user: {}});
    }
};