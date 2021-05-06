
 var mysql = require('mysql');
 var connection = mysql.createConnection({       // Create Connection

   host: "localhost",
   user: "root",
   password: "" ,
   database: "reserved"   // connection with database "reserved"
   });

   // To see that the connection has worked
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });




  var appoint = "INSERT into  contacts_Appointments ( Appointmentsid, contactsId) VALUES ?";
 var value=[ [10,11]];                                                                                                 // insert data into Appointments table
 connection.query(appoint,[value] ,function (err, result)
  {
 if (err) throw err;
 var contact_id;
 var Appointments_id ;
 for( let data of value)                                                                                                 // loop to  check the entered data
 {
 Appointments_id = data[0];                                                                                            // return the Appointments id from entered data
 contact_id = data[1]                                                                                                 // return the contacts id


 }

 connection.query("SELECT contactsID  FROM contacts_Appointments", function (err, result, fields) 
 {
 if (err) throw err;
 const arr_for_Appointments_date_from_query =[];
 const arr_for_Appointments_id_from_query =[];
 var count_id =0 ;
 var date_for_Appointments_id;
 var count_date=0;
 for( var i = 0 ; i < result.length ; i++)                                                                          // Loop to pass the returned  from the query statement
 {
 var contact_id_from_qeury = result[i]['contactsID'];
 if( contact_id_from_qeury == contact_id)
  {                                                                                                                 //if statments to check if the entered 'contactsid' equal the element that return from query statment
 count_id++                                                                                                          // count the number of repeated contacts id
  console.log('count id ',count_id);
 if(count_id >3)                                                                                                     // if count of contacts id more than 3 ,select statment will applied
 {

 connection.query("SELECT  Appointments.AppointmentsID as ID, date_format(DateANDtime, '%Y-%m-%d') as date FROM Appointments ", function (err, result, fields) {
  if (err) throw err;
 console.log('result',result);

 for(var m = 0 ; m < result.length;m++)   {                                                                         // for loop to pass the data in Appointments table
 var Appointments_id_from_query = result[m]['ID']                                                           //returned Appointments id from query
 var Appointments_date_from_query = result[m]['date']                                                // returend Appointments date from query

 arr_for_Appointments_id_from_query.push(Appointments_id_from_query);                                     // push the returned Appointments id in array 
        
 arr_for_Appointments_date_from_query.push(Appointments_date_from_query)                                           // push the returned Appointments date in array     
 }
 for( var k = 0 ; k < arr_for_Appointments_id_from_query.length ; k++){                                           // for loop to pass the 
 if (arr_for_Appointments_id_from_query[k]==Appointments_id){                                                    // check if the Appointments id equal the Appointments id from query
 date_for_Appointments_id= arr_for_Appointments_date_from_query[k];                                                  // returned the date for the Appointments id
 }}

 for ( var y = 0 ; y <arr_for_Appointments_date_from_query.length ; y++)                                     // for loop to pass the Appointments date
 {
 if (arr_for_Appointments_date_from_query[y] == date_for_Appointments_id ){                                            // check if the returend Appointments date equal the date for Appointments id 
  count_date++                                                                                                       // count the number of the entered date 
 } }
 console.log('you already have three Appintments on that date ',count_date,);



 });}}}
 
 });

 });
 




