var express = require('express');

var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
   
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login',
    
});

connection.connect(function(error){
    //callback
    if(!!error) {
        console.log('Error');
    }else{
        console.log('Connected');
    }
});

app.get('/database', function(req, resp) {
    //about mysql
    connection.query("SELECT * FROM users", function(error, rows, field){
       // callback
        if(!!error) {
            
            console.log('Error in the query');
        }else{
            //parse with you rowd/fields
            console.log('Successful query');
           
            console.log(rows[0]);
             //print to like this--> RowDataPacket { id: 1, username: 'Sami', Password: '12345' }
            
            console.log(rows[0].username);
            console.log(rows[0].Password);
            //print only name!
            //print only Password!
            //and print only in command!
            resp.send('hello    ' + rows[0].username + ' Your password is: ' + ' "' + rows[0].Password + '" ' + 'Do you need to change your password because is very Big! = LoL');
            //its print in to browser!:D
        }
    });
});
app.listen(1337);