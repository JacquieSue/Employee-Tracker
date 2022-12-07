const inquirer = require('inquirer');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: 'password',
        database: 'work_db, '
    },
    console.log(`Connected to the work_db database.`)
);

// TODO: Create an array of questions for user input
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'question',
                message: 'What would you like to do? (Use arrow keys)',
                choices: [
                    {
                        name: 'view all employees, value: 'VIEW_ALL_EMPLOYEES' ,
                    
                            name: 'view all employees by department, value: 'VIEW_ALL_EMPLOYEES_BY_DEPARTMENT' ,
                    
                                name: 'view all employees by manager, value: 'VIEW_ALL_EMPLOYEES_BY_MANAGER' ,
                     name: 'add employee', value: 'ADD_EMPLOYEE'
                    },

                    name: 'remove employee, value: 'REMOVE_EMPLOYEE' },
                    
                            name: 'update employee, value: 'UPDATE_EMPLOYEE' },
                     name: 'update employee manager, value: 'UPDATE_EMPLOYEE_MANAGER' },
                    
                    };

    message: '(Move up and down to reveal more choices)',
                ],
}
        ]).then(response => {
    switch () {
        case 'VIEW_ALL_EMPLOYEES':
            viewAllEmployees();
            break;
    }
}),
    .then(response => {
    switch () {
        case 'VIEW_ALL_EMPLOYEES_BY_DEPARTMENT':
            viewAllEmployeesByDepartment();
            break;
    }
})
        .then(response => {
            switch () {
                case 'VIEW_ALL_EMPLOYEES_BY_MANAGER':
                    viewAllEmployeesByManager();
                    break;
            }
        })
        .then(response => {
            switch () {
                case 'ADD_EMPLOYEE':
                    addEmployee();
                    break;
            }
        })
        .then(response => {
            switch () {
                case 'REMOVE_EMPLOYEE':
                    removeEmployee();
                    break;
            }
        })
        .then(response => {
            switch () {
                case 'UPDATE_EMPLOYEE_ROLE':
                    updateEmployeeRole();
                    break;
            }
        })
        .then(response => {
            switch () {
                case 'UPDATE_EMPLOYEE_MANAGER':
                    updateEmployeeManager();
                    break;
            }
        })

}

db.query('SELECT * FROM ')
