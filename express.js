const express = require('express');
const app = express();
const cors = require("cors");
const mysql = require("mysql");
app.use(cors());

const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        port:3307,
        password:"",
        database:"fogado"
})



app.get("/", (req,res) =>{
    res.send("működik")
})
app.get("/sz", (req,res) =>{
    const sql = "SELECT * FROM szobak"
    db.query(sql, (err, result)=>{
         res.json(result);   
        })
})
app.listen(3300)