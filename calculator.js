
calculate = function(operand1,operand2,operator){
  operand1 = parseInt(operand1);
  operand2 = parseInt(operand2);
  switch (operator){
    case '+':
      res = operand1 + operand2;
      break;

    case '-':
      res = operand1 - operand2;
      break;

    case '*':
      res = operand1 * operand2;
      break;

    case '/':
      if (operand2 == 0)
        res = 'Can not divide by zero.'
      else
        res = operand1 / operand2;
      break;
  }
  
  return res+"";
}

module.exports = calculate;