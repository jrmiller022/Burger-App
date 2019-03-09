DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int
    auto_increment not null,
burger_name varchar
    (255) not null,
devoured boolean default false,
createdAt timestamp not null,
primary key
    (id)
);