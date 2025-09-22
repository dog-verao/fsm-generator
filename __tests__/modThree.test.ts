import { modThree } from '../src/modThree';

describe('modThree', () => {
  test('basic values', () => {
    /*
      0 -> 0 % 3 = 0
      1 -> 1 % 3 = 1
      10 -> 2 % 3 = 2
      11 -> 3 % 3 = 0
    */
    expect(modThree('0')).toBe(0);
    expect(modThree('1')).toBe(1);
    expect(modThree('10')).toBe(2);
    expect(modThree('11')).toBe(0);
  });

  test('given examples', () => {
    expect(modThree('1101')).toBe(1);
    expect(modThree('1110')).toBe(2);
    expect(modThree('1111')).toBe(0);
  });

  test('long binary string', () => {
    const input = '1'.repeat(50);
    const result = modThree(input);
    expect([0, 1, 2]).toContain(result);
  });

  test('throws on invalid input', () => {
    expect(() => modThree('102')).toThrow();
    expect(() => modThree('abc')).toThrow();
  });

  test('empty string returns remainder 0', () => {
    expect(modThree('')).toBe(0);
  });
});
