import { gte, lte } from './code';

test('first test', () => {
    expect(1).toBe(1);
    // throw new Error('error');
});

test('gte', () => {
    expect(gte(1, 1)).toBe(true);
    expect(gte(1, 2)).toBe(false);
    expect(gte(2, 1)).toBe(true);

    expect(lte(1, 1)).toBe(true);
    expect(lte(1, 2)).toBe(true);
    expect(lte(2, 1)).toBe(false);
});