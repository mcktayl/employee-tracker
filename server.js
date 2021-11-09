const inquirer = require('inquirer');
const cTable = require('console.table');
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

// TO DO: Add startup options
function startApplication() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'Welcome to the employee database.  Which of the following would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department to the database',
                    'Add a role to the database',
                    'Add an employee to the database',
                    'Update an existing employee\'s information',
                    'Exit application'
                ]
            }
        ])
        .then((function ({ option }) {
            switch (option) {
                case 'View all departments':
                    viewDepartment();
                    break;
                case 'Exit application':
                    connection.end(function (err) {
                        if (err) {
                            return console.log(err)
                        };
                        console.log('No longer connected to the database.');
                    });
            }
        }))
}

// TO DO: View all departments option

// TO DO: View all roles option

// TO DO: View all employees option

// TO DO: Add department option

// TO DO: Add role option

// TO DO: Add employee option

// TO DO: Update employee option

startApplication();