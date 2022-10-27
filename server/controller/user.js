const connection = require('../db/connection');

// Add New Department

module.exports.userLogin = async (req, res) => {
  //const data = req.body;
  const { user_email, password } = req.body;
  console.log(req.body);
  if (!user_email || !password) {
    return res.status(404).send('Invalid Detail');
  }
  connection.query(
    `SELECT * FROM user WHERE user_email= ? AND password= ?`,
    [user_email, password],
    (err, results, fields) => {
      if (err) {
        res.status(404,'error in api', err.message);
      } else {
        res.status(200).send({ status: 'success', results: results });
      }
    }
  );
  //console.log(user);
  // connection.query("INSERT INTO departments SET?", data, (err, results, fields) => {
  //     if (err) { res.status(404).send("error in api",err.message) }
  //    else { res.status(201).send(results)  }
  // })
};
