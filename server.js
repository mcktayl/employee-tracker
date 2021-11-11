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

// initial function containing user options and resultsgit 
function startApplication() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department to the database',
                    'Add a role to the database',
                    'Add an employee to the database',
                    'Update an existing employee\'s role',
                    'Exit application'
                ]
            }
        ])
        .then((function ({ option }) {
            switch (option) {
                case 'View all departments':
                    viewDepartment();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add a department to the database':
                    addDepartment();
                    break;
                case 'Add a role to the database':
                    addRole();
                    break;
                case 'Add an employee to the database':
                    addEmployee();
                    break;
                case 'Update an existing employee\'s role':
                    updateEmployee();
                    break;
                case 'Exit application':
                    connection.end(function (err) {
                        if (err) throw err;
                        console.log('No longer connected to the database.');
                    });
            }
        }))
}

// option to view all departments in database
function viewDepartment() {
    let query = `SELECT * FROM departments`;
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);

        startApplication();
    });
};

// option to view all roles in database
function viewRoles() {
    let query = 
        `SELECT r.id, r.title, r.salary, d.name AS department 
        FROM roles AS r
        LEFT JOIN departments AS d 
        ON r.department_id = d.id`;
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);

        startApplication();
    });
};

// option to view all employees in database
function viewEmployees() {
    let query = 
        `SELECT e.id, e.first_name, e.last_name, d.name AS department, r.title AS role, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager 
        FROM employees AS e
        LEFT JOIN roles AS r
        ON e.role_id = r.id
        LEFT JOIN departments AS d
        ON d.id = r.department_id
        LEFT JOIN employees AS m
        ON m.id = e.manager_id`;
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);

        startApplication();
    });
};

// option to add a department to database
function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department_name',
                message: 'What department would you like to add to the database?'
            }
        ])
        .then(function ({ department_name }) {
            let query = 
                `INSERT INTO departments (name)
                VALUES ('${department_name}')`;
            connection.query(query, function (err, res) {
                if (err) throw err;
                console.log('Department successfully added to the database.');

                startApplication();
            });           
        });
};

// option to add a role to database
function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'role_title',
                message: 'What is the title of this position?'
            },
            {
                type: 'input',
                name: 'role_salary',
                message: 'What is the salary for this position?'
            },
            {
                type: 'input',
                name: 'role_department',
                message: 'What is this position\'s department id?'
            }
        ])
        .then(function ({ role_title, role_salary, role_department }) {
            let query =
                `INSERT INTO roles (title, salary, department_id)
                VALUES ('${role_title}', '${role_salary}', '${role_department}')`;
            connection.query(query, function (err, res) {
                if (err) throw err;
                console.log('Role successfully added to the database.');
                
                startApplication();
            });
        });
};

// option to add employee to database
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the employee\'s first name?'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the employee\'s last name?'
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'What is the employee\'s role id?'
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'What is the employee\'s manager id?'
            },
        ])
        .then(function ({ first_name, last_name, role_id, manager_id }) {
            let query =
                `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                VALUES ('${first_name}', '${last_name}', '${role_id}', '${manager_id}')`;
            connection.query(query, function (err, res) {
                if (err) throw err;
                console.log('Employee successfully added to the database.');
                
                startApplication();
            });
        });
};

// option to update employee's role
function updateEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employee_id',
                message: 'What is the id of the employee you\'d like to update?'
            },
            {
                type: 'input',
                name: 'updated_role_id',
                message: 'What is this employee\'s new role id?',
            }
        ])
        .then(function ({ employee_id, updated_role_id }) {
            let query = 
                `UPDATE employees
                SET role_id='${updated_role_id}'
                WHERE id='${employee_id}'`
            connection.query(query, function (err, res) {
                if (err) throw err;
                console.log('Employee successfully updated.');

                startApplication();
            });
        });
};

// initializes application
startApplication();