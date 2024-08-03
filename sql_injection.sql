---Testing sql codeFor esp32---

CREATE DATABASE rfid_access;

USE rfid_access;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rfid VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE access_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rfid VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    access_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
