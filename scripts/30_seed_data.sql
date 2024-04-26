INSERT INTO Users (User_name, User_email, User_password_hash) VALUES
('Alice Smith', 'alice@example.com', 'hashed_password1'),
('Bob Johnson', 'bob@example.com', 'hashed_password2'),
('Charlie Brown', 'charlie@example.com', 'hashed_password3');


INSERT INTO Offices (Ofic_name, Ofic_location) VALUES
('Downtown Office', ST_GeomFromText('POINT(-0.127758 51.507351)', 4326)),
('Uptown Office', ST_GeomFromText('POINT(-0.137638 51.521027)', 4326)),
('Eastside Office', ST_GeomFromText('POINT(-0.088780 51.514246)', 4326));

INSERT INTO Formations (Form_title, Form_description) VALUES
('Data Science Bootcamp', 'Intensive 8-week program to learn data science.'),
('Web Development Course', 'Learn full stack web development in 12 weeks.'),
('Graphic Design Workshop', 'Weekend workshop on modern graphic design principles.');

INSERT INTO Formation_Sessions (Form_id, Ofic_id, Form_sess_vacancy_limit, Form_sess_date_time) VALUES
(1, 1, 30, '2024-07-01 09:00:00+00'),
(2, 2, 25, '2024-08-15 10:00:00+00'),
(3, 3, 15, '2024-09-20 11:30:00+00');

INSERT INTO Enrollments (User_id, Sess_id, Enro_date) VALUES
(1, 1, '2024-06-25'),
(2, 1, '2024-06-26'),
(3, 2, '2024-08-10');
