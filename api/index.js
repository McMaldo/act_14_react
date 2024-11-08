const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const api = express();
api.use(express.json());
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if(err){
        console.log("connection error", err);
        return;
    }
    console.log('connection status: 200');
})
const PORT = 3000;
api.listen(PORT, () => console.log(`port: ${PORT}`))