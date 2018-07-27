const mysql = require('mysql');

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pley',
  }
);

connection.connect((err) => {
  if (err) throw err;
  console.log('connected to mysql database!');
});

module.exports = connection;
