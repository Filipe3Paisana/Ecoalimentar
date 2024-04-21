CREATE TABLE Users (
    User_id SERIAL PRIMARY KEY,
    User_name VARCHAR(255) NOT NULL,
    User_email VARCHAR(255) UNIQUE NOT NULL,
    User_password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE Offices (
    Ofic_id SERIAL PRIMARY KEY,
    Ofic_name VARCHAR(255) NOT NULL,
    Ofic_location GEOGRAPHY(Point, 4326) -- ou GEOMETRY(Point, 4326)
);

CREATE TABLE Formations (
    Form_id SERIAL PRIMARY KEY,
    Form_title VARCHAR(255) NOT NULL,
    Form_description TEXT
);
CREATE TABLE Formation_Sessions (
    Sess_id SERIAL PRIMARY KEY,
    Form_id INTEGER NOT NULL,
    Ofic_id INTEGER NOT NULL,
    Form_sess_vacancy_limit INTEGER NOT NULL,
    Form_sess_date_time TIMESTAMP WITH TIME ZONE NOT NULL,
    FOREIGN KEY (Form_id) REFERENCES Formations (Form_id),
    FOREIGN KEY (Ofic_id) REFERENCES Offices (Ofic_id)
);

CREATE TABLE Enrollments (
    Enro_id SERIAL PRIMARY KEY,
    User_id INTEGER NOT NULL,
    Sess_id INTEGER NOT NULL,
    Enro_date DATE NOT NULL,
    FOREIGN KEY (User_id) REFERENCES Users (User_id),
    FOREIGN KEY (Sess_id) REFERENCES Formation_Sessions (Sess_id)
);
