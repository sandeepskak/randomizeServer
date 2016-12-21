var express = require('express');
const PORT = 8080;
var app = express();
var xkcd = require('./app/xkcd/index');
var xkcdInstance = new xkcd();

app.get('/', function (req, res) {
  xkcdInstance.random(function(err, result) {
    res.send(result);
  })
})

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
