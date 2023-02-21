-- Active: 1668766747113@@127.0.0.1@3307@authentication
DROP DATABASE if EXISTS todos;

CREATE DATABASE todos;

USE todos;

CREATE Table todoItems(
    id           VARCHAR(255)  NOT NULL,
    title        TEXT          NOT NULL,

    PRIMARY KEY(id),
    INDEX(title(80))
);