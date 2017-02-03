var express = require('express')
var app = express()

app.get('/',function(res,req){
  res.status(200).send("Homepage");
});

app.get('/about',function(res, req){
    res.send("You are blocked...");
});