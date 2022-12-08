const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'password',
    database: 'work_db'
},

    console.log(`Connected to the work_db database.`)
);

db.connect(function (err) {
    if(err) throw err;
});

module.exports = db;