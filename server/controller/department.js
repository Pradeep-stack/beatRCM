const { response } = require('express');
const connection = require('../db/connection');

// Add New Department

module.exports.adddepartment = async (req, res) => {
  const data = req.body;
  console.log(data);
  connection.query(
    'INSERT INTO departments SET?',
    data,
    (err, results, fields) => {
      if (err) {
        res.status(404).send('error in api', err.message);
      } else {
        res.status(201).send(results);
      }
    }
  );
};
// Select Department List

module.exports.getdepartment = async (req, res) => {
  connection.query('SELECT * FROM departments', (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

// Update Department List

module.exports.update = async (req, res) => {
  const data = [
    req.body.name,
    req.body.department_code,
    req.body.description,
    req.params.id,
  ];
  //req.params.id;
  console.log(data);
  //const formData = [data, dataId]
  //console.log(formData);
  connection.query(
    'UPDATE departments SET name = ?, department_code = ?, description = ?  WHERE id=?',
    data,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
};

module.exports.delete = async (req, res) => {
  const data = [req.params.id];
  connection.query(
    'DELETE FROM departments WHERE id =' + data,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
};
