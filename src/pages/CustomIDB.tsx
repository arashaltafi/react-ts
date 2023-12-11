import React, { useState, useEffect } from 'react';
import { openDB } from 'idb';

interface Todo {
    id: number;
    text: string;
}

const CustomIDB = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    useEffect(() => {
        const openDatabase = async () => {
            const db = await openDB('todos', 1, {
                upgrade(db) {
                    db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
                },
            });

            const initialTodos = await db.getAll('todos');
            setTodos(initialTodos);
        };

        openDatabase();
    }, []);

    const addTodo = async () => {
        const db = await openDB('todos', 1);
        const newTodoObj: Todo = { text: newTodo, id: Date.now() };
        await db.add('todos', newTodoObj);
        setTodos([...todos, newTodoObj]);
        setNewTodo('');
    };

    return (
        <div>
            <h1 className='title mt-8'>Todo App</h1>
            <form
                className='mt-32 flex flex-col items-center justify-center gap-8'
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo();
                }}
            >
                <input
                    className='py-2 px-4 border-2 border-solid border-black rounded-lg'
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter a new todo"
                />
                <button className='btnSuccess' type="submit">Add Todo</button>
            </form>
            <ul className='subtitle mt-8'>
                {todos.map((todo) => (
                    <>
                        <li className='m-4' key={todo.id}>{todo.text}</li>
                        <hr />
                    </>
                ))}
            </ul>
        </div>
    );
};

export default CustomIDB;