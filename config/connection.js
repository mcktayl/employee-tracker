const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'employee_db'
    }
    );

connection.connect(function (err) {
    if (err) {
        return console.log(err)
    };
    console.log('Connected to the employee_db database.');
});