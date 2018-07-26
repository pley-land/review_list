//sample users
var users = ['Alec Hyde', 'Anson Ao', 'Benny Wu', 'Beth Johnson', 'Burke Green', 'Christian Noh', 'David Liman', 'Diego Espinoza', 'Dilsher Buttar', 'Enji Kim', 'Gaurav Gulati', 'Greg Pereira', 'Jae Ho Bae', 'Jean-Pierre Vertil', 'Jens Leerssen', 'Joel Spears', 'John Lopez', 'Jordan Bice', 'Joyce Cho',
'Justin Lin', 'Ken Crimmens', 'Kony Pham', 'Kristie Zheng', 'Michael Dimitras', 'Michael Chan', 'Nils Gudbranson', 'Warren Tseng', 'Xizhou Li', 'Zach Coursey', 'Zachary Hill', 'Adam Carter', 'Allan Zhao', 'Aman Vaid', 'Chloe Lin', 'Hanjoon Kim', 'Diane Huang', 'Dussadee Wang', 'Edward Baeg', 'Leanne Huynh',
'Nolan Yee', 'Petr Kekalo', 'Rebecca Phares', 'Ricardo Figueroa', 'Richelle Ji', 'Ringo Sanchez', 'Servio Lee', 'Shayaun Nejad', 'Sophie Leroi', 'Steven Lee', 'Thu Nguyen', 'Jeremy Lee', 'Shane Yuan'];

//sample restaurants
var restaurants = [
`Gogi Time`,
`Boba Guys`,
`Chipotle`,
`Fork & Spoon`,
`Halal Guys`,
`EighTea`,
`Burger King`,
`In-n-Out`,
`Popeyes`,
`Tu Lan`,
`KFC`,
`Chick-fil-a`,
`Blind Tiger`,
`Wendy's`,
`A&W`,
`Rooster & Rice`,
`Shakewell`,
`Flipside`,
`Urban Tavern`,
`707 Sutter`,
`Momofuku`,
`Roaring Fork `,
`Ippudo`,
`The Melt`,
`BunMee`,
`Pei Wei `,
`The Cavalier`,
`Dirty Habit`,
`Lin Jia Asian Kitchen`,
`Colonial Donuts`,
`Oakland Kosher Foods`,
`Rolling Dunes`,
`Grand Lake Kitchen`,
`Soba Ichi`,
`Proposition Chicken`,
`Qi Dumpling Lounge`,
`Warren's Webpack Bananza`,
`Arizmendi Bakery`,
`The Star on Grand`,
`Holy Land Restuarant`,
`Cheese Steak Shop`,
`Anson's Handsome Hamburgers`,
`Belcampo Restuarant & Butcher Shop`,
`Daily Grill`,
`Morton's The Steakhouse`,
`The Mark `,
`California Pizza Kitchen`,
`Ikaros Greek Restuarant`,
`Modigliani Cafe`,
`JJ Burger`,
`Sliver`,
`Lakeshore Cafe`,
`Belly`,
`Lovely's`,
`Mua`,
`Flavor of India`,
`Dosirak Shop`,
`Super Duper Burgers`,
`Hancook`,
`Chan's Kitchen`,
`Steven's Slow Today Deli `,
`Aisle 5`,
`CANA Cuban Parlor & Cafe`,
`Homeroom`,
`Justin's Koolaid Bar`,
`CHICA Oakland`,
`Penrose`,
`Mockingbird`,
`Wally's Cafe`,
`Orchid Pavillion Cafe`,
`Fogo de Chao`,
`The Grove`,
`Michael's Romantic Bulgogi Beef`,
`Belotti Ristorante`,
`Tacolicious`,
`The Hog's Apothecary`,
`Tim Ho Wan`,
`Postino's `,
`The Melting Pot`,
`Rubio's`,
`Bonchon `,
`MOD Pizza`,
`Wingstop `,
`Tempest`,
`Playland`,
`Raven `,
`Temple`,
`Hawthorne`,
`The Yellow Submarine`,
`Subway`,
`Umami Burger`,
`Asian Box`,
`Hopscotch`,
`Shogun Japanese Sushi`,
`Shane is Li's bestfriend`,
`Champa Garden`,
`Southern Cafe`,
`Jong Ga House`,
`Sidebar Oaktown`,
`Mua`
]

//sample text for reviews
var text = `Whatever four dollar toast authentic, retro 8-bit intelligentsia shaman pok pok vaporware. Bushwick helvetica prism, whatever locavore artisan tbh cray kombucha DIY organic humblebrag. Kinfolk vegan godard tacos. Migas XOXO keytar, umami YOLO sartorial offal lo-fi roof party hashtag flannel jean shorts. Blog health goth bushwick banh mi. Schlitz gluten-free skateboard, portland shoreditch knausgaard authentic hella pabst live-edge deep v disrupt. Cronut salvia paleo 3 wolf moon pickled fam. Four loko kinfolk chillwave taiyaki sriracha listicle vinyl. Pitchfork bicycle rights wolf, venmo four loko try-hard enamel pin health goth sustainable PBR&B la croix sartorial. Pug hammock truffaut gluten-free twee godard. Lo-fi pinterest marfa slow-carb chillwave ugh, sustainable pug chartreuse fam meh deep v. Shaman narwhal air plant gochujang master cleanse distillery. Waistcoat succulents mixtape, cliche tbh organic helvetica mumblecore. Wolf farm-to-table woke readymade mixtape meggings bicycle rights gochujang craft beer. Irony la croix viral 8-bit vice deep v banh mi kitsch selvage echo park. Dreamcatcher try-hard offal, actually wolf pitchfork cold-pressed brooklyn beard tote bag viral banjo hell of gluten-free echo park. Coloring book put a bird on it next level umami crucifix ethical la croix narwhal shaman listicle. Cloud bread farm-to-table keytar venmo pitchfork. Tbh shaman tumblr VHS pug actually snackwave single-origin coffee photo booth tumeric man bun raclette etsy austin. Tousled blue bottle lo-fi, street art polaroid 8-bit YOLO pug. Intelligentsia af flexitarian cliche helvetica. Art party occupy gentrify small batch taiyaki hella. 3 wolf moon celiac +1 kale chips, salvia small batch art party PBR&B put a bird on it sustainable sriracha letterpress tumeric shoreditch tbh. Skateboard shabby chic hammock put a bird on it keytar affogato pickled four loko messenger bag whatever banh mi. Snackwave jianbing pop-up dreamcatcher truffaut. Mlkshk fanny pack 90's distillery hashtag literally tumeric neutra blue bottle fixie hella small batch coloring book poke meh. Austin aesthetic bicycle rights, iPhone YOLO artisan quinoa 8-bit coloring book kickstarter crucifix copper mug butcher asymmetrical enamel pin. Disrupt fanny pack etsy banh mi single-origin coffee tbh copper mug craft beer. Squid vaporware umami, iPhone meh unicorn yr VHS cliche celiac tilde vegan brooklyn keytar fixie. Migas synth palo santo subway tile, keytar four dollar toast pitchfork authentic direct trade irony mumblecore church-key DIY banjo. Humblebrag affogato chicharrones cardigan taiyaki pitchfork. Lo-fi organic authentic woke, vinyl pok pok bitters shoreditch plaid. Narwhal actually squid letterpress disrupt literally tousled plaid jianbing aesthetic chambray vegan taxidermy raw denim. Stumptown food truck 90's normcore. La croix retro affogato cronut keytar coloring book microdosing cornhole whatever edison bulb. Pinterest mumblecore chicharrones artisan trust fund pickled. Adaptogen waistcoat master cleanse authentic +1 ennui lomo man bun cloud bread schlitz listicle vinyl bitters. Hashtag chartreuse post-ironic, vinyl semiotics seitan cred fanny pack authentic DIY listicle coloring book gluten-free. Wolf post-ironic succulents irony meh pop-up hexagon messenger bag tote bag locavore taiyaki air plant lyft. Whatever retro pug glossier you probably haven't heard of them fingerstache cloud bread tumeric tote bag. Keffiyeh fanny pack offal meggings succulents green juice fashion axe mixtape semiotics cred salvia skateboard schlitz man braid. Intelligentsia listicle chambray cold-pressed skateboard post-ironic shaman pitchfork craft beer pork belly typewriter raclette. Listicle waistcoat put a bird on it snackwave vice hell of. Intelligentsia brunch gochujang, XOXO DIY truffaut ethical. `

//generate query text to insert records into db table users


//generate query text to insert records into db table restaurants
var fillRestaurants = function(restaurants) {
  var query = '';
  restaurants.forEach(restaurant => {
    query = query.concat(`INSERT INTO restaurants (name) VALUES ('${restaurant}'); \n`);
  });
  return query;
}

//helper functions for generateReview - generater random contents of review
var generateRating = function() {
  return Math.floor(Math.random() * 6);
}
var generateText = function(text) {
  var sentenceCount = Math.floor(Math.random() * 6);
  var sentences = text.split('. ');
  var review = [];
  for (var i = 0; i <= sentenceCount; i++) {
    var randomIndex = Math.floor(sentences.length * Math.random());
    review.push(sentences[randomIndex]);
  }
  return review.join('. ').concat('.');
}
//'YYYY-MM-DD HH:MM:SS'
var generateDatetime = function() {
  var year = 2018 - Math.floor(Math.random() * 20);
  var month = Math.floor(Math.random() * 12) + 1;
  var day = Math.floor(Math.random() * 30) + 1;
  var hours = Math.floor(Math.random() * 24);
  var minutes = Math.floor(Math.random() * 60);
  var seconds = Math.floor(Math.random() * 60);
  //add zeros to fit format
  if (month < 10) {
    month = '0' + month.toString();
  }
  if (day < 10) {
    day = '0' + day.toString();
  }
  if (hours < 10) {
    hours = '0' + hours.toString();
  }
  if (minutes < 10) {
    minutes = '0' + minutes.toString();
  }
  if (seconds < 10) {
    seconds = '0' + seconds.toString();
  }
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
var generateUseful = function() {
  return Math.floor(Math.random() * 15);
}
var generateFunny = function() {
  return Math.floor(Math.random() * 25);
}
var generateCool = function() {
  return Math.floor(Math.random() * 5);
}
var generateUser = function(users) {
  return Math.floor(Math.random() * users.length);
}

var generateReview = function(restaurantID) {
  var review =
  {
    rating: generateRating(),
    text: generateText(text),
    date: generateDatetime(),
    useful: generateUseful(),
    funny: generateFunny(),
    cool: generateCool(),
    user_id: generateUser(users),
    restaurant_id: restaurantID
  };
  return review;
}

//produce array of random numbers of reviews per restaurant
var randomNumberOfReviews = function(numberOfRestaurants) {
  var arr = [];
  for (var i = 0; i <= numberOfRestaurants; i++) {
      arr.push(Math.ceil(Math.random() * 40));
  }
  return arr;
}

//iterate through array of random review numbers and generate the appropriate number of records
var allReviews = function(arrayOfRandomNumbers) {

  var reviews = [];
  arrayOfRandomNumbers.forEach((num, i) => {
      //store each review with their index number(restaurant id)
      for (var i = 0; i <= num; i++) {
        var review = generateReview(i);
        reviews.push(review);
      }
  });
  return reviews;
}

//generate query text to insert array of reviews into db table reviews
var fillReviews = function(reviews) {
  var query = '';
  reviews.forEach(review => {
    query = query.concat(`INSERT INTO reviews (rating, text, date, useful, funny, cool, user_id, restaurant_id) VALUES (${review.rating}, \`${review.text}\`, \`${review.date}\`, ${review.useful}, ${review.funny}, ${review.cool}, ${review.user_id}, ${review.restaurant_id}); \n`);
  });
  return query;
}

//generate query text to insert records into db table review_pictures
var fillReviewPics = function() {
  var query = '';
}

var sqlReviews = function(reviews) {

}
module.exports.generateCool = generateCool;
