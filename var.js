var express = require('express')
var path = __dirname+'/views/'
var app = express()
var mustache = require('mustache')
var calculator = require('./calculator')
//var pub_path = path.resolve(__dirname, 'public');
//app.use(express.static(pub_path));





app.get('/input_form',function(req, res){
  console.log('aaa');
    res.sendFile(path+'input_form.html')
});

app.get('/calc',function(req,res){
  operand1 = req.query.operand1;
  operand2 = req.query.operand2;
  operator = req.query.operator;
  console.log(operand1+" "+operand2+" "+operator);
  r = mustache.render("\n\n  Operandor1 = " + operand1 +
      "\n\n  Operandor2 = " + operand2 +
      "\n\n  Operator : " + operator +
      "\n\n  Result = {{result}}",
  {
    result: calculator( operand1, operand2, operator)
  });
  res.end(r);
});

app.get('/username:username', function(req,res){
  shcool = mustache.render("{{name}}",{
    name: req.params.username
  })
  res.send(shcool)
});

app.use(function(req, res){
  res.status(200).send()
});


app.listen(3001);
