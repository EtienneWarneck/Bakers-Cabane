
DROP DATABASE IF EXISTS pastries_db;

CREATE DATABASE pastries_db;

USE pastries_db;

CREATE TABLE pastries (
  id int NOT NULL AUTO_INCREMENT,
  pastry_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);