CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS formations (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    localizacao GEOGRAPHY(POINT, 4326)
);
