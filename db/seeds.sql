INSERT INTO departments (name)
VALUES  ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Sales Lead', '70000', '001'),
        ('Salesperson', '40000', '001'),
        ('Lead Engineer', '150000', '002'),
        ('Software Engineer', '100000', '002'),
        ('Account Manager', '150000', '003'),
        ('Accountant', '120000', '003'),
        ('Legal Team Lead', '250000', '004'),
        ('Lawyer', '175000', '004');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('Michelle', 'Chan', '001', NULL),
        ('Lisa', 'Turner', '002', '001'),
        ('Ashley', 'Paulson', '003', NULL),
        ('Taylor', 'Smith', '004', '003'),
        ('Timothy', 'West', '005', NULL),
        ('Henry', 'Morgen', '006', '005'),
        ('Gertrude', 'Glenn', '007', NULL),
        ('Patrick', 'Wilson', '008', '007');
        
