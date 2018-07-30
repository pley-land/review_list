const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const PORT = 3011;
const DIST_DIR = path.join(__dirname, '/../client/dist');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(DIST_DIR));

// get 20 most recent reviews upon page upload
app.get('/:restaurantId/reviews', (req, res) => {
  var id = req.params.restaurantId;
  db.getRecentTwenty((err, reviews) => {
    console.log('GET REVIEWS PRESSED');
    if (err) {
      console.log('SERVER ERROR: getting recent 20 reviews!')
    } else {
       console.log('reviews: ' + reviews);
       res.json(reviews);
    }
  }, parseInt(id));
});

// app.post('/:restaurantId/reviews', (req, res) => {
//   var id = req.params.restaurantId;
//   db.getRecentTwenty((err, reviews) => {
//     if (err) {
//       console.log('SERVER ERROR: getting recent 20 reviews!')
//     } else {
//        console.log('reviews: ' + reviews);
//       res.json(reviews);
//     }
//   }, parseInt(id));
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
