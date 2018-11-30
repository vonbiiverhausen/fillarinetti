var express = require('express');

var mysql = require('mysql');

var app = express();

var connection = mysql.createPool({
   
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login',
    
});

app.get('/showpass', function(req, resp) {
    //about mysql
   connection.getConnection(function(error, tempCont){
       
       if(!!error){
           
           tempCont.release();
           console.log('Error');
       }else{
           console.log('Connected');
           tempCont.query("SELECT * FROM users", function(error, rows, field){
              tempCont.release();
               if(!!error) {
                   console.log('Error in the query');
               }else{
                   resp.json(rows[0]);
               }
           });
       }
   });
});
pnbr=1337;  //1337 on portti numero 
app.listen(pnbr);