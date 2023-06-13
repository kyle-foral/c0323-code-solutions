import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns number in USD dollar format', () => {
    const amount = 62458;
    const result = toDollars(amount);
    expect(result).toEqual('$62458.00');
  });
});

describe('divideBy', () => {
  it('divides numbers by a dividor', () => {
    const numbers = [8, 4, 2];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([4, 2, 1]);
  });
});

describe('multiplyBy', () => {
  it('multiplys the value by a number', () => {
    const obj = {
      a: 1,
      b: 3,
      c: 5,
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({
      a: 2,
      b: 6,
      c: 10,
    });
  });
});
