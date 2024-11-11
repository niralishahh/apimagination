const mysql = require('mysql2');
require('dotenv').config();

console.log("User:", process.env.PASSWORD);

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.PASSWORD,  // put into dotenv & hide
    database: 'fav_articles'
}).promise()


async function getFavs() {
    const result = await pool.query("SELECT * FROM favs")
    const rows = result[0];
    return rows;
}

async function getFav(id) {
    const [rows] = await pool.query("SELECT * FROM favs WHERE id = ?", [id])
    return rows[0]
}

async function createFav(title, author, description, url) {
    const result = await pool.query(
        'INSERT INTO favs (title, author, description, url) VALUES (?, ?, ?, ?)', [title, author, description, url]
    )
    return result
}

module.exports = {
    getFavs, getFav, createFav
};

