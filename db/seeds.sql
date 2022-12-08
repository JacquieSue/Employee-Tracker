use work_db;

    INSERT INTO department
        (department_name, id)
    VALUES
        ('Development', NULL),
        ('Design', NULL),
        ('Application', NULL),
        ('Management', NULL);

    INSERT INTO role
        (title, salary, department_id)
    VALUES
        ('Tech', 25000, 1),
        ('Installation', 30000, 2),
        ('TroubleShooting', 35000, 3),
        ('Supervisor', 40000, 4);

    INSERT INTO employee
        (first_name, last_name, role_id, manager_id)
    VALUES
        ('John', 'Doe', NULL, NULL),
        ('Mike', 'Chan', NULL, NULL),
        ('Ashley', 'Rodriguez', NULL, NULL),
        ('Kevin', 'Tupik', NULL, NULL),
        ('Kunal', 'Singh', NULL, NULL),
        ('Malia', 'Brown', NULL, NULL),
        ('Sarah', 'Lourd', NULL, NULL),
        ('Tom', 'Allen', NULL, NULL);
