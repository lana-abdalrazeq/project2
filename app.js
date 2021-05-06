 var mysql = require('mysql');

 var connection = mysql.createConnection({       // Create Connection

  host: "localhost",  
  user: "root",
  password: "" ,
  database: "reserved"   // connection with database "reserved"
 });





 // query about the current day's Appointments
 

 connection.query("SELECT UserName ,DateANDtime FROM Appointments  WHERE DATE(DateANDtime) = CURDATE() ", function (err, result, fields) {
 if (err) throw err;
 console.log("Appointments  of current day");
 console.log(result);
 });


 // query about the Appointment  of this week
 connection.query("select UserName,DateANDtime from Appointments  WHERE date_format(DateANDtime,'%Y-%m-%d')= date_format(now(),'%Y-%m-%d')", function (err, result, fields) {
 if (err) throw err;
 console.log("Appointments  of current week")
 console.log(result);
 });


 // query about the Appointments  of this month
 connection.query("select UserName,DateANDtime from Appointments  where date_format(DateANDtime,'%Y-%m')=date_format(now(),'%Y-%m') ", function (err, result, fields) {
 if (err) throw err;
 console.log("Appointments  of current month")
 console.log(result);
 });

  