var express = require('express');

var mysql = require('mysql');

var bodyParser = require('body-parser');


var con = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'test'
})

con.connect();

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

// open html file

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

// open ejs file

app.get('/todo', function(req, res) {
    res.render('index')
});

app.post('/todo', function(req, res) {

  
     var name = req.body.name
     var sql = "INSERT INTO test1 (name) VALUES ('" + name + "')";

     con.query(sql, function(err, result) {
          if (err) throw err;
          console.log(result);
     });
     res.redirect('/todo');
});


app.listen(8000)