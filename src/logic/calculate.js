import Operate from './operate';

const calculate = (calculatorData, btnName) => {
  const { total, next, operation } = calculatorData;

  switch (btnName) {
    case 'AC':
      return { total: null, next: null, operation: null };

    case '+/-':
      if (next) {
        return {
          total,
          next: Operate(next, '-1', 'x'),
          operation,
        };
      }
      return {
        total: Operate(total, '-1', 'x'),
        next,
        operation,
      };

    case '.':
      if (operation) {
        if (next) {
          return { total, next: next + btnName, operation };
        }
        return { total, next: `0${btnName}`, operation };
      }
      if (total) {
        return { total: total + btnName, next, operation };
      }
      return { total: `0${btnName}`, next, operation };

    case '=':
      if (operation === '÷' && next === '0') {
        return {
          total: 'there is no division by zero',
          next: null,
          operation: null,
        };
      } return {
        total: next ? Operate(total, next, operation) : total,
        next: null,
        operation: null,
      };
    case '%':
      if (total) {
        return {
          total: next ? Operate(total, next, operation) : 'expression error',
          next: null,
          operation: null,
        };
      }
      break;
    default:
      if (operation) {
        return {
          total: next ? Operate(total, next, operation) : 'expression error',
          next: null,
          operation: btnName,
        };
      }
  }
  return { total: next, next: null, operation: btnName };
};

export default calculate;
