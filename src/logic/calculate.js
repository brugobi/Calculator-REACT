import Operate from './operate';


const calculate = (calculatorData, btnName) => {
  const { total, next, operation } = calculatorData;

  switch (btnName) {
    case 'AC':
      return { total: null, next: null, operation: null };
    break;
    
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
    break;
    
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
    break;
      
    case '=':

    break;  
  }
}