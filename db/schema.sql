-- Execute this file from the command line by typing:
-- mysql -u <USER> -p < schema.sql

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

-- populate table restaurants
INSERT INTO restaurants (name) VALUES ('Gogi Time');
INSERT INTO restaurants (name) VALUES ('Boba Guys');
INSERT INTO restaurants (name) VALUES ('Chipotle');
INSERT INTO restaurants (name) VALUES ('Fork & Spoon');
INSERT INTO restaurants (name) VALUES ('Halal Guys');
INSERT INTO restaurants (name) VALUES ('EighTea');
INSERT INTO restaurants (name) VALUES ('Burger King');
INSERT INTO restaurants (name) VALUES ('In-n-Out');
INSERT INTO restaurants (name) VALUES ('Popeyes');
INSERT INTO restaurants (name) VALUES ('Tu Lan');
INSERT INTO restaurants (name) VALUES ('KFC');
INSERT INTO restaurants (name) VALUES ('Chick-fil-a');
INSERT INTO restaurants (name) VALUES ('Blind Tiger');
INSERT INTO restaurants (name) VALUES ('Wendy\'s');
INSERT INTO restaurants (name) VALUES ('A&W');
INSERT INTO restaurants (name) VALUES ('Rooster & Rice');
INSERT INTO restaurants (name) VALUES ('Shakewell');
INSERT INTO restaurants (name) VALUES ('Flipside');
INSERT INTO restaurants (name) VALUES ('Urban Tavern');
INSERT INTO restaurants (name) VALUES ('707 Sutter');
INSERT INTO restaurants (name) VALUES ('Momofuku');
INSERT INTO restaurants (name) VALUES ('Roaring Fork ');
INSERT INTO restaurants (name) VALUES ('Ippudo');
INSERT INTO restaurants (name) VALUES ('The Melt');
INSERT INTO restaurants (name) VALUES ('BunMee');
INSERT INTO restaurants (name) VALUES ('Pei Wei ');
INSERT INTO restaurants (name) VALUES ('The Cavalier');
INSERT INTO restaurants (name) VALUES ('Dirty Habit');
INSERT INTO restaurants (name) VALUES ('Lin Jia Asian Kitchen');
INSERT INTO restaurants (name) VALUES ('Colonial Donuts');
INSERT INTO restaurants (name) VALUES ('Oakland Kosher Foods');
INSERT INTO restaurants (name) VALUES ('Rolling Dunes');
INSERT INTO restaurants (name) VALUES ('Grand Lake Kitchen');
INSERT INTO restaurants (name) VALUES ('Soba Ichi');
INSERT INTO restaurants (name) VALUES ('Proposition Chicken');
INSERT INTO restaurants (name) VALUES ('Qi Dumpling Lounge');
INSERT INTO restaurants (name) VALUES ('Warren\'s Webpack Bananza');
INSERT INTO restaurants (name) VALUES ('Arizmendi Bakery');
INSERT INTO restaurants (name) VALUES ('The Star on Grand');
INSERT INTO restaurants (name) VALUES ('Holy Land Restuarant');
INSERT INTO restaurants (name) VALUES ('Cheese Steak Shop');
INSERT INTO restaurants (name) VALUES ('Anson\'s Handsome Hamburgers');
INSERT INTO restaurants (name) VALUES ('Belcampo Restuarant & Butcher Shop');
INSERT INTO restaurants (name) VALUES ('Daily Grill');
INSERT INTO restaurants (name) VALUES ('Morton\'s The Steakhouse');
INSERT INTO restaurants (name) VALUES ('The Mark ');
INSERT INTO restaurants (name) VALUES ('California Pizza Kitchen');
INSERT INTO restaurants (name) VALUES ('Ikaros Greek Restuarant');
INSERT INTO restaurants (name) VALUES ('Modigliani Cafe');
INSERT INTO restaurants (name) VALUES ('JJ Burger');
INSERT INTO restaurants (name) VALUES ('Sliver');
INSERT INTO restaurants (name) VALUES ('Lakeshore Cafe');
INSERT INTO restaurants (name) VALUES ('Belly');
INSERT INTO restaurants (name) VALUES ('Lovely\'s');
INSERT INTO restaurants (name) VALUES ('Mua');
INSERT INTO restaurants (name) VALUES ('Flavor of India');
INSERT INTO restaurants (name) VALUES ('Dosirak Shop');
INSERT INTO restaurants (name) VALUES ('Super Duper Burgers');
INSERT INTO restaurants (name) VALUES ('Hancook');
INSERT INTO restaurants (name) VALUES ('Chan\'s Kitchen');
INSERT INTO restaurants (name) VALUES ('Steven\'s Slow Today Deli ');
INSERT INTO restaurants (name) VALUES ('Aisle 5');
INSERT INTO restaurants (name) VALUES ('CANA Cuban Parlor & Cafe');
INSERT INTO restaurants (name) VALUES ('Homeroom');
INSERT INTO restaurants (name) VALUES ('Justin\'s Koolaid Bar');
INSERT INTO restaurants (name) VALUES ('CHICA Oakland');
INSERT INTO restaurants (name) VALUES ('Penrose');
INSERT INTO restaurants (name) VALUES ('Mockingbird');
INSERT INTO restaurants (name) VALUES ('Wally\'s Cafe');
INSERT INTO restaurants (name) VALUES ('Orchid Pavillion Cafe');
INSERT INTO restaurants (name) VALUES ('Fogo de Chao');
INSERT INTO restaurants (name) VALUES ('The Grove');
INSERT INTO restaurants (name) VALUES ('Michael\'s Romantic Bulgogi Beef');
INSERT INTO restaurants (name) VALUES ('Belotti Ristorante');
INSERT INTO restaurants (name) VALUES ('Tacolicious');
INSERT INTO restaurants (name) VALUES ('The Hog\'s Apothecary');
INSERT INTO restaurants (name) VALUES ('Tim Ho Wan');
INSERT INTO restaurants (name) VALUES ('Postino\'s ');
INSERT INTO restaurants (name) VALUES ('The Melting Pot');
INSERT INTO restaurants (name) VALUES ('Rubio\'s');
INSERT INTO restaurants (name) VALUES ('Bonchon ');
INSERT INTO restaurants (name) VALUES ('MOD Pizza');
INSERT INTO restaurants (name) VALUES ('Wingstop ');
INSERT INTO restaurants (name) VALUES ('Tempest');
INSERT INTO restaurants (name) VALUES ('Playland');
INSERT INTO restaurants (name) VALUES ('Raven ');
INSERT INTO restaurants (name) VALUES ('Temple');
INSERT INTO restaurants (name) VALUES ('Hawthorne');
INSERT INTO restaurants (name) VALUES ('The Yellow Submarine');
INSERT INTO restaurants (name) VALUES ('Subway');
INSERT INTO restaurants (name) VALUES ('Umami Burger');
INSERT INTO restaurants (name) VALUES ('Asian Box');
INSERT INTO restaurants (name) VALUES ('Hopscotch');
INSERT INTO restaurants (name) VALUES ('Shogun Japanese Sushi');
INSERT INTO restaurants (name) VALUES ('Shane is Li\'s bestfriend');
INSERT INTO restaurants (name) VALUES ('Champa Garden');
INSERT INTO restaurants (name) VALUES ('Southern Cafe');
INSERT INTO restaurants (name) VALUES ('Jong Ga House');
INSERT INTO restaurants (name) VALUES ('Sidebar Oaktown');
INSERT INTO restaurants (name) VALUES ('Mua');
