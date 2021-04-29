import calculate from '../logic/calculate';

describe('calculate', () => {
  let result = {
    total: null,
    next: null,
    operate: null,
  };

  it('total', () => {
    result = calculate(result, '5');
    expect(result.total).toBe('5');
  });

  it('+', () => {
    result = calculate(result, '+');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(7);
  });

  it('-', () => {
    result = calculate(result, '-');
    result = calculate(result, '1');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(6);
  });

  it('÷', () => {
    result = calculate(result, '÷');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(3);
  });

  it('x', () => {
    result = calculate(result, 'x');
    result = calculate(result, '7');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(21);
  });

  it('%', () => {
    result = calculate(result, 'x');
    result = calculate(result, '7');
    result = calculate(result, '%');
    result = calculate(result, '=');
    expect(JSON.parse(result.total)).toEqual(1.47);
  });

  it('division by zero', () => {
    result = calculate(result, '÷');
    result = calculate(result, '0');
    result = calculate(result, '=');
    expect(result.total).toEqual('no division by zero');
  });

  it('AC', () => {
    result = calculate(result, 'AC');
    expect((result)).toEqual({ total: null, next: null, operation: null });
  });

  it('expression error', () => {
    result = calculate(result, '5');
    result = calculate(result, '+');
    result = calculate(result, '+');
    expect(result.total).toEqual('expression error');
  });

});
