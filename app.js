var mysql = require('mysql');
var db = require('./db.js');

var connection = mysql.createConnection({       // Create Connection

  host: "localhost",  
  user: "root",
  password: "" ,
  database: "booked"   // connection with database "reserved"
});





// query about the current day's appointments 

    connection.query("SELECT UserName ,dateandtime FROM Appointments WHERE DATE(DateANDtime) = CURDATE() ", function (err, result, fields) {
  if (err) throw err;
  console.log("appointments of current day");
  console.log(result);
});


// query about the appointments of this week
connection.query("select username,dateandtime from appointments    WHERE date_format(dateandtime,'%Y-%m-%d')= date_format(now(),'%Y-%m-%d')", function (err, result, fields) {
  if (err) throw err;
  console.log("appointments of current week")
  console.log(result);
});


// query about the appointments of this month
connection.query("select username,dateandtime from appointments   where date_format(dateandtime,'%Y-%m')=date_format(now(),'%Y-%m') ", function (err, result, fields) {
  if (err) throw err;
  console.log("appointments of current month")
  console.log(result);
});

  