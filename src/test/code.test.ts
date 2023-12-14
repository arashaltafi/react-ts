import { gte, lte, welcomeMessage, usersList, getUser } from './code';

describe('code test', () => {
    test('first test', () => {
        expect(1).toBe(1);
        // throw new Error('error');
    });

    test('gte', () => {
        expect(gte(1, 1)).toBe(true);
        expect(gte(1, 2)).toBe(false);
        expect(gte(2, 1)).toBe(true);
    });

    test('lte', () => {
        expect(lte(1, 1)).toBe(true);
        expect(lte(1, 2)).toBe(true);
        expect(lte(2, 1)).toBe(false);
    })

    test('welcomeMessage', () => {
        expect(welcomeMessage('Arash')).toBe('Hello Arash, Welcome to my app');
        expect(welcomeMessage('')).toBe('Please enter a value');
        expect(welcomeMessage(null)).toBe('Please enter a value');
        expect(welcomeMessage(NaN)).toBe('Please enter a value');
        expect(welcomeMessage(undefined)).toBe('Please enter a value');
        expect(welcomeMessage(0)).toBe('Please enter a value');
    })

    test('usersList', () => {
        expect(usersList(27)).toEqual([
            {
                id: 2,
                name: 'Amir',
                age: 30
            }
        ]);
        expect(usersList(0)).toEqual([]);
        expect(usersList("something else than a number")).toEqual([]);
        expect(usersList(null)).toEqual([]);
        expect(usersList(undefined)).toEqual([]);
        expect(usersList(NaN)).toEqual([]);
    })

    test('getUser', () => {
        expect(getUser('Arash')).toMatchObject({
            id: 1,
            name: 'Arash'
        });
        expect(getUser('Arash')).toHaveProperty('name');
        expect(getUser('Arash')).toHaveProperty('id', 1);
        expect(getUser('')).toEqual(null);
        expect(getUser(null)).toEqual(null);
        expect(getUser(NaN)).toEqual(null);
        expect(getUser(undefined)).toEqual(null);
        expect(getUser(0)).toEqual(null);
    })
})
