const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

// TO DO: Add startup options
function startApplication() {
    console.log('application started');

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'Welcome to the employee database.  Which of the following would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department to the database',
                    'Add a role to the database',
                    'Add an employee to the database',
                    'Update an existing employee\'s information'
                ]
            }
        ])
}

// TO DO: View all departments option

// TO DO: View all roles option

// TO DO: View all employees option

// TO DO: Add department option

// TO DO: Add role option

// TO DO: Add employee option

// TO DO: Update employee option

startApplication();