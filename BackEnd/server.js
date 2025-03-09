const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors());

app.get('/', (re, res)=> {
    return res.json("From Backend Side");

})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database_test1"
})

app.post('/login_test1', (req, res)=> {
    const sql = "SELECT * FROM login_test1 WHERE username = ? AND password = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data)=> {
        if(err) return res.json({Message: "Error"});
        if(data.length > 0) {
            return res.json("Login Successful")
        } else {
            return res.json("Login Failed")
        }
    })
})

app.listen(8081, ()=> {
    console.log("Listening...");
})