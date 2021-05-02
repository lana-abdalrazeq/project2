
   var mysql = require('mysql');
   var connection = mysql.createConnection({       // Create Connection

    host: "localhost",
    user: "root",
    password: "" ,
    database: "booked"   // connection with database "reserved"
  });

  // To see that the connection has worked
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });



//// creat the database "booked"

    //  connection.query("CREATE DATABASE booked", function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");
    // });

    // // creat contacts table
    //  var sql = "CREATE TABLE contacts (contactsID integer primary key, FullName text,Email text unique)";
    // connection.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });



  //  //creat appointments table
  //     var sql1 = "CREATE TABLE Appointments (AppointmentsID integer primary key ,UserName text,address text ,notes text, DateANDtime  DATETIME,contactsID  integer,foreign key(contactsID) references contacts (contactsID) )";
  //   connection.query(sql1, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table created");
  //   });


    ////insert data into contacts table
//     var contact = "INSERT into  contacts (contactsID, FullName,Email) VALUES ?";
//     var values= [
//         [11,'rawand saleh','rawand@yahoo.com',],
//         [22,'sara nahlan','sara@yahoo.com',],
//         [33,'hala ataf','hala@gmail.com'],
//         [44,'aya ahmad','aya@gmail.com'],
//         [55,'yasmine hasan','yasmine@gmail.com'],
//         [66,'mohaamad ali','mohammad@yahoo.com'],
//         [77,'omar nizar','omar@gmail.com'],
// ];
//     connection.query(contact,[values] ,function (err, result) {
//       if (err) throw err;
//       console.log(" record inserted");
//     });



// // insert data to appointments table
//     var appoint = "INSERT into  Appointments (AppointmentsID,UserName, address,notes,DateANDtime,contactsid) VALUES ?";
//     var values= [
//         [1,'zaid ahmad','amman/marka','check','2021-05-2 10:30:54',22],
//         [2,'hasan mohammad','amman/almadinah','Practical test','2021-05-16 10:48:54.000000',11],
//         [3,'mahmoud ali','irbid/alhuson','check','2021-05-7 11:54:54.000000',33],
//         [4,'rania hussam','amman/alhussien','Theoretical test','2021-04-20 12:00:00.000000',66],
//         [5,'dima omar','amman/nuzha','Practical test','2021-04-22 10:48:54.000000',44],
//         [6,'dina fares','amman/khalda','Theoretical exam test','2021-05-16 1:50:54.000000',11],
//         [7,'jana fathi','amman/tbrbour','Practical test','2021-05-16 9:00:54.000000',11],
// ];
//     connection.query(appoint,[values] ,function (err, result) {
//       if (err) throw err;
//       console.log(" record inserted");
//     });




/*This code calculates the number of appointments with the entered contact, and if the same contact is repeated for more than 
three times, a check is made on the entered date, and if the date is found repeated for more than three times for the same contact, 
a message is printed*/
var appoint = "INSERT into  Appointments ( appointmentsid,address, notes, DateANDtime , contactsid) VALUES ?";
var value=[ [11,'amman/marka','check','2021-05-16 10:30:54',33]]; // insert data into appointments table
connection.query(appoint,[value] ,function (err, result) {
if (err) throw err;
var y;
var x ;
var d;
for( let c of value)                                             // loop to  check the entered data 
{
x= c[3];                                                            // return the date and time from entered data
y=c[4]                                                               // return the contacts id 

 d =x.slice(0, 11);                                               // return the date without time


}



connection.query("SELECT contactsID ,date_format(DateANDtime, '%Y-%m-%d') as date FROM appointments", function (err, result, fields) {

  if (err) throw err;
const arr2 =[];
   var count =0 ;
   var cnt=0;
   var w;
for(var j =0; j<result.length;j++){                      // Loop to pass the returned date from the query statement and push the element in array
  var l =result[j]['date'];
  arr2.push(l);
} 


  for( var i=0; i< result.length;i++){                   // lLoop to pass the returned  from the query statement 
    var z = result[i]['contactsID'];
        if( z== y){                                     //if statments to check if the entered 'contactsid' eqqual the element that return from query statment
        count++                                         // count the number of repeated contacts id
   if(count >3)                                          
   {

  w =arr2[j-1];                                        // store the last element of array 'the entered date'    
for( var k =0; k<arr2.length;k++)                      // loop to pass the array elements
{
if (w==arr2[k] ){                                       // check if 'the date enetered' equal the other date in array
  cnt++;                                                // count the number of repeated dates
  if( cnt>3){                                           // check if count more than print ' you already have three dates in this day '
    console.log('you already have three dates in this day')
    return cnt;
  }
}

}

}}}



});
});



