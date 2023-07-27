const stringLength = require('./stringFunction');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const capitalizeFunction = require('./capitalizeFunction');

test('at least 1 character long', () => expect(stringLength('gra')).toBeGreaterThanOrEqual(1))

test('Not longer than 10 characters', () => expect(stringLength('fgfsgdg')).toBeLessThanOrEqual(10))

test('Reverse function test - Palindrome Case', () => expect(reverseString('ana')).toBe('ana'))

test('Reverse function test', () => expect(reverseString('gra')).toBe('arg'));

describe('calculator tests', () => {
    test('adding numbers', () => expect(calculator.add(2, 2)).toBe(4));
    test('adding numbers', () => expect(calculator.add(-2, -2)).toEqual(-4));
    test('adding numbers', () => expect(calculator.add(7, 1990)).toEqual(1997));

    test('subtracting numbers', () => expect(calculator.subtract(2, 2)).toEqual(0));
    test('subtracting numbers', () => expect(calculator.subtract(-2, 5)).toEqual(-7));
    test('subtracting numbers', () => expect(calculator.subtract(-20, 2)).toEqual(-22));

    test('Multiplying numbers', () => expect(calculator.multitply(2, 2)).toEqual(4));
    test('Multiplying numbers', () => expect(calculator.multitply(2, 20)).toEqual(40));
    test('Multiplying numbers', () => expect(calculator.multitply(2, 0.5)).toEqual(1));

    test('Dividing numbers', () => expect(calculator.divide(2, 2)).toEqual(1));
    test('Dividing numbers', () => expect(calculator.divide(2, 0)).toEqual(Infinity));
    test('Dividing numbers', () => expect(calculator.divide(-2, 0)).toEqual(-Infinity));
    test('Dividing numbers', () => expect(calculator.divide(0, 0)).toEqual(NaN));
    test('Dividing numbers', () => expect(calculator.divide(0, 1997)).toEqual(0));
})


test('First Capitalized letter', () => expect(capitalizeFunction('gra')).toBe('Gra'));