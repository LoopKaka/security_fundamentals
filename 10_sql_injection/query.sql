create database loopkaka;

CREATE TABLE loopkaka.users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO loopkaka.users (username, password) VALUES ('demo', 'test');

CREATE TABLE loopkaka.products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO loopkaka.products (name, description) VALUES ('product1', 'test 1'), ('product2', 'test 2'), ('product3', 'test3');


