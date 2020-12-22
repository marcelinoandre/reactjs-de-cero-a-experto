import { retornaArreglo } from '../../base/07-deses-arr';

describe('04 User arr - desctruct', () => {
  it('should return a string and a number ', () => {
    const [letter, number] = retornaArreglo();

    expect(letter).toBe('ABC');
    expect(typeof letter).toBe('string');

    expect(number).toBe(123);
    expect(typeof number).toBe('number');
  });
});
