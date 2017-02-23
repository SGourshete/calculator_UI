var express = require('express')
var mustache = require('mustache')
var appRouter = express.Router()

  appRouter.get('/calc',function(req,res){
  r = mustache.render("\n\n  Operandor1 = " + "" +
      "\n\n  Operandor2 = " + "" +
      "\n\n  Operator : " + "" +
      "\n\n  Result = {{}}",
  {
    //result: calculator( operand1, operand2, operator)
  });
  console.log("here");
  res.end("here");
});

module.exports = appRouter;