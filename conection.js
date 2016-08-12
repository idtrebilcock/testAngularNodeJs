	var express    = require("express");
	var mysql      = require('mysql');
	var app = express();
	var path    = require("path");
 
 
  var pool      =    mysql.createPool({
     connectionLimit : 100, //important
     host     : 'localhost',
     user     : 'root',
     password : 'pass123',
     database : 'testnodejs',
     debug    :  false
 });

 function getUser(req,res) {
     
     pool.getConnection(function(err,connection){
         if (err) {
           connection.release();
           res.json({"code" : 100, "status" : "Error in connection database"});
           return;
         }   
 
         console.log('connected as id ' + connection.threadId);
         
         connection.query("select * from user",function(err,rows){
             connection.release();
             if(!err) {
                 res.json(rows);
             }           
         });
 
         connection.on('error', function(err) {      
               res.json({"code" : 100, "status" : "Error in connection database"});
               return;     
         });
   });
 }
 
 app.get("/usr/",function(req,res){-
         getUser(req,res);
 });
 
 app.use(express.static(path.join(__dirname, 'public')));
 

 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
 
 app.listen(3000);