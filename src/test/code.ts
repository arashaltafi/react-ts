const gte = (a: number, b: number) => {
    if (a > b) return true;
    if (a < b) return false;
    return true;
}

const lte = (a: number, b: number) => {
    if (a < b) return true;
    if (a > b) return false;
    return true;
}

const welcomeMessage = (name: any) => {
    if (!name) return 'Please enter a value';
    if (typeof name !== 'string') return 'Please enter a value';
    if (name === '') return 'Please enter a value';
    if (name === null) return 'Please enter a value';
    if (name === undefined) return 'Please enter a value';

    return `Hello ${name}, Welcome to my app`;
}

const usersList = (age: any) => {
    if (!age) return [];
    if (typeof age !== 'number') return []; 
    if (age < 0) return [];
    if (age > 100) return [];


    const users = [
        {
            id: 1,
            name: 'Arash',
            age: 26
        },
        {
            id: 2,
            name: 'Amir',
            age: 30
        }
    ]

    return users.filter((user) => {
        return user.age >= age
    })
}

const getUser = (name: any) => {
    if (!name) return null;
    if (typeof name !== 'string') return null;
    if (name === '') return null;
    if (name === null) return null;
    if (name === undefined) return null;

    return {
        id: 1,
        name: 'Arash',
    }
}

export { gte, lte, welcomeMessage, usersList, getUser }