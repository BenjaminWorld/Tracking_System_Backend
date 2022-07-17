const mysql = require('mysql');

const con = mysql.createConnection({
    host: "bhg0jdjtgjzuemqpnwbz-mysql.services.clever-cloud.com",
    user: "ugmdpsvldrkog4uk",
    password: "YEGxGt8Asrez3M1BaT0F"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = con;

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query('SELECT * FROM bhg0jdjtgjzuemqpnwbz.task', function (err, result) {
//       if (err) throw err;
//       console.log("Result: " + result);
//     });
//   });