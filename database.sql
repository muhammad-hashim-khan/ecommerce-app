CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE users(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 email VARCHAR(100) UNIQUE,
 password VARCHAR(100),
 role ENUM('admin','user') DEFAULT 'user'
);

CREATE TABLE products(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 price DECIMAL(10,2)
);

CREATE TABLE cart(
 id INT AUTO_INCREMENT PRIMARY KEY,
 user_id INT,
 product_id INT,
 quantity INT
);

CREATE TABLE orders(
 id INT AUTO_INCREMENT PRIMARY KEY,
 user_id INT,
 product_id INT,
 quantity INT,
 status VARCHAR(50) DEFAULT 'Pending'
);