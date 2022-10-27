let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'beat_crm',
});

const connectDB = () => {
  try {
    connection.connect((err) => {
      if (err) {
        return console.log(err.message);
      } else {
        return console.log('Connected to the MySQL server.');
      }
    });
  } catch (error) {
    console.log('Not connected to DB');
  }
};

connectDB();

module.exports = connection;
