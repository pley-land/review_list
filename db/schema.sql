DROP DATABASE IF EXISTS pley;

CREATE DATABASE pley;

USE pley;

CREATE TABLE restaurants (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	username varchar(100) NOT NULL,
	profile_picture varchar(100) NOT NULL,
	location varchar(50) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE reviews (
	id int NOT NULL AUTO_INCREMENT,
	rating int NOT NULL,
	text varchar(255) NOT NULL,
	date datetime NOT NULL,
	useful int  NOT NULL,
	funny int  NOT NULL,
	cool int  NOT NULL,
	user_id int  NOT NULL,
	restaurant_id int  NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
	FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

CREATE TABLE review_pictures (
	id int NOT NULL AUTO_INCREMENT,
	link varchar(100) NOT NULL,
	review_id int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE
);


-- Execute this file from the command line by typing:
-- mysql -u <USER> -p < schema.sql
