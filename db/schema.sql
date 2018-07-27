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
INSERT INTO restaurants (name) VALUES ('Gogi Time')('Boba Guys')('Chipotle')('Fork & Spoon')('Halal Guys')('EighTea')('Burger King')('In-n-Out')('Popeyes')('Tu Lan')('KFC')('Chick-fil-a')('Blind Tiger')('Wendy\'s')('A&W')('Rooster & Rice')('Shakewell')('Flipside')
('Urban Tavern')('707 Sutter')('Momofuku')('Roaring Fork ')('Ippudo')('The Melt')('BunMee')('Pei Wei ')('The Cavalier')('Dirty Habit')('Lin Jia Asian Kitchen')('Colonial Donuts')('Oakland Kosher Foods')('Rolling Dunes')('Grand Lake Kitchen')('Soba Ichi')('Proposition Chicken')('Qi Dumpling Lounge')
('Warren\'s Webpack Bananza')('Arizmendi Bakery')('The Star on Grand')('Holy Land Restuarant')('Cheese Steak Shop')('Anson\'s Handsome Hamburgers')('Belcampo Restuarant & Butcher Shop')('Daily Grill')('Morton\'s The Steakhouse')('The Mark ')('California Pizza Kitchen')('Ikaros Greek Restuarant')
('Modigliani Cafe')('JJ Burger')('Sliver')('Lakeshore Cafe')('Belly')('Lovely\'s')('Mua')('Flavor of India')('Dosirak Shop')('Super Duper Burgers')('Hancook')('Chan\'s Kitchen')('Steven\'s Slow Today Deli ')('Aisle 5')('CANA Cuban Parlor & Cafe')('Homeroom')('Justin\'s Koolaid Bar')('CHICA Oakland')
('Penrose')('Mockingbird')('Wally\'s Cafe')('Orchid Pavillion Cafe')('Fogo de Chao')('The Grove')('Michael\'s Romantic Bulgogi Beef')('Belotti Ristorante')('Tacolicious')('The Hog\'s Apothecary')('Tim Ho Wan')('Postino\'s ')('The Melting Pot')('Rubio\'s')('Bonchon ')('MOD Pizza')('Wingstop ')('Tempest')
('Playland')('Raven ')('Temple')('Hawthorne')('The Yellow Submarine')('Subway')('Umami Burger')('Asian Box')('Hopscotch')('Shogun Japanese Sushi')('Shane is Li\'s bestfriend')('Champa Garden')('Southern Cafe')('Jong Ga House')('Sidebar Oaktown')('Amano');
