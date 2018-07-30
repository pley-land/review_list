const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const db = require('../database-mysql');

const app = express();
const PORT = 3011;
const DIST_DIR = path.join(__dirname, '/../client/dist');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(DIST_DIR));

// app.get('/api/lines', (req, res) => {
//   db.getAllLines(function(err, lines) {
//     if (err) {
//       console.log('server error in getting line!')
//     } else {
//       // console.log('lines: ' + lines);
//       res.json(lines);
//   }
//   })
// });

// //sends stops along a service line
// app.get('/api/lines/:lineId', (req, res) => {
//   var lineId =req.params.lineId;
//   db.getAllStops(function(err, stops) {
//     if (err) {
//       console.log('server error in getting stop!');
//     } else {
//       res.json(stops);
//     }
//   }, parseInt(lineId));
// })

// //updates station to be a favorite in the database
// app.post('/api/lines/', (req, res) => {
//   console.log('STATION NAME: ' + req.body.name, 'type: ', typeof req.body.name);
//   db.favoriteStation(function (err) {
//     if (err) {
//       console.log('server error in toggling station!');
//     } else {
//       res.send();
//     }
//   }, req.body.name);
// })

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
