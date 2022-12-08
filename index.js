// const express = require('express');
// const { application } = require('express');
const { application } = require('express');
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
const db = require('./db/connection');

require('console.table');


// TODO: Create an array of questions for user input
function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'question',
                message: 'What would you like to do? (Use arrow keys)',
                choices: [
                    {
                        name: 'view all departments',
                        value: 'VIEW_ALL_DEPARTMENTS'
                    },
                    {
                        name: 'view all roles',
                        value: 'VIEW_ALL_ROLES'
                    },
                    {
                        name: 'view all employees',
                        value: 'VIEW_ALL_EMPLOYEES'
                    },
                    {
                        name: 'add department',
                        value: 'ADD_DEPARTMENT'
                    },
                    {
                        name: 'add role',
                        value: 'ADD_ROLE'
                    },
                    {
                        name: 'add employee',
                        value: 'ADD_EMPLOYEE'
                    },
                    {
                        name: 'update employee role ',
                        value: 'UPDATE_EMPLOYEE_ROLE'
                    },

                ],
                // message: '(Move up and down to reveal more choices)',
            }
        ])
        .then(response => {
            switch (response.question) {
                case 'VIEW_ALL_DEPARTMENTS':
                    viewAllDepartments();
                    break;
                case 'VIEW_ALL_ROLES':
                    viewAllRoles();
                    break;
                case 'VIEW_ALL_EMPLOYEES':
                    viewAllEmployees();
                    break;
                case 'ADD_DEPARTMENT':
                    addDepartment();
                    break;
                case 'ADD_ROLE':
                    addRole();
                    break;
                case 'ADD_EMPLOYEE':
                    addEmployee();
                    break;
                case 'UPDATE_EMPLOYEE_ROLE':
                    updateEmployeeRole();
                    break;
                default:
                    quit();
            }
        })
};


// db.query('SELECT * FROM ')
function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    })
}
function viewAllRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    })
}
function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    })
}
function addDepartment() {
    // db.query('SELECT * FROM department', function (err, results) {
    //     if (err) throw err;
    //     console.table(results);
    // })
    application.post('/db/department/addDepartment', ({ body }, res) => {
        const sql = `INSERT INTO department (department_name)
        VALUES (?)`;
        const params = [body.department_name];
        db.query(sql, params, (err, result) => {
            console.table(results);
        });
    });
}


function addEmployee() {
    // inquirer.prompt([{}])
    application.post('/db/department/addDepartment')
    db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ? ? ? ?', data.first, data.last, data.roleId, data.managerId, function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    })
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            // 
        }
    ])
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    })
}

function updateEmployeeManager() {
    inquirer.prompt([
        {
            // 
        }
    ])
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    })
}
// VIEW ALL DEPARTMENTS AND VIEW ALL ROLES
// Prepared statements Mini project shows how to pass variables
init();

// function removeEmployee() {
//     db.query('SELECT * FROM employee', function(err,results) {
//         if (err) throw err;
//         console.table(results);
//         init();
//     })
// }