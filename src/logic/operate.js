import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const number1 = Big(numberOne * 1);
  const number2 = Big(numberTwo * 1);
  let result;

  switch (operation) {
    case '%':
      result = (number1.times(number2)).div(100);
      break;
    case '+':
      result = number1.plus(number2);
      break;
    case '-':
      result = number1.minus(number2);
      break;
    case 'x':
      result = number1.times(number2);
      break;
    case '÷':
      result = number1.div(number2);
      break;
    default:
      result = null;
  }
  return (result.toString());
};

export default Operate;
