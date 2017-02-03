var express = require('express')
var path = require('path')
var app = express()

var pub_path = path.resolve(__dirname, 'public');
//app.use(express.static(pub_path));

app.use(function(req,res, next){
  if(req.ip=='::1'){
  res.status(400).send("You are blocked...")
  }
  else{
  console.log('Inside'+req.ip);
  next();
  }
  });

app.get('/about',function(req, res){
    res.send('About')
});

app.use(function(req, res){
  res.status(200).send()
});


app.listen(3001);
