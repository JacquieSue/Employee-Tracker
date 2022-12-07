DROP DATABASE IF EXISTS work_db;
CREATE DATABASE work_db;

USE work_db;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT,
manager_id INT
);

CREATE TABLE role_position (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR (30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT
);

CREATE TABLE department (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR (30) NOT NULL,
FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);


