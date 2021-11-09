const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

// connects to SQL database
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
function viewDepartment() {};

// TO DO: View all roles option
function viewRoles() {};

// TO DO: View all employees option
function viewEmployees() {};

// TO DO: Add department option
function addDepartment() {};

// TO DO: Add role option
function addRole() {};

// TO DO: Add employee option
function addEmployee() {};

// TO DO: Update employee option
function updateEmployee() {};

// initializes application
startApplication();