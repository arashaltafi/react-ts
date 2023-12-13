const gte = require('../test/code');

test('first test', () => {
    expect(1).toBe(1);
    // throw new Error('error');
});

test('gte', () => {
    expect(gte(1, 1)).toBe(true);
    expect(gte(1, 2)).toBe(false);
    expect(gte(2, 1)).toBe(true);
});