var express = require('express')
var path = require('path')
var app = express()
var mustache = require('mustache')
var calculator = require('./calculator')
var approuter = require('./AppRouter')
//var pub_path = path.resolve(__dirname, 'public');
//app.use(express.static(pub_path));

var ds = []
app.locals.data = ds;

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//app.get('/api', approuter);

app.get('/save_note', function(req,res){
  title = req.query.title;
  note = req.query.note;
  var d = new Date();
  console.log(d.getDate());
  string_to_save = title+"%"+note+"%"+new Date();// d.getDate()+"/"+d.getMonth()+1+"/"+d.getFullYear();
  ds.push(string_to_save);
  res.redirect("/list");
});

app.get('/list', function(req,res){
  res.render("list");
});


app.get('/input_form',function(req, res){
    //res.sendFile(path+'input_form.html')
    res.render("input_form");
});

app.get('/calc',function(req,res){
  console.log("in var");
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


app.get('/',function(req,res){
  res.status(404).end("Page not Found");
})

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
