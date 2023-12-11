import React, { useState, useEffect } from 'react';
import { openDB } from 'idb';

interface Todo {
    id: number;
    text: string;
}

const CustomIDB = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

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

    const editTodo = (todo: Todo) => {
        setEditingTodo(todo);
        setNewTodo(todo.text);
    };

    const updateTodo = async () => {
        if (!editingTodo) return;

        const db = await openDB('todos', 1);
        const updatedTodo = { ...editingTodo, text: newTodo };

        await db.put('todos', updatedTodo);
        const updatedTodos = todos.map((todo) =>
            todo.id === editingTodo.id ? updatedTodo : todo
        );

        setTodos(updatedTodos);
        setNewTodo('');
        setEditingTodo(null);
    };

    const deleteTodo = async (id: number) => {
        const db = await openDB('todos', 1);
        await db.delete('todos', id);
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1 className='title mt-8'>Todo App</h1>
            <form
                className='mt-32 flex flex-col items-center justify-center gap-8'
                onSubmit={(e) => {
                    e.preventDefault();
                    if (editingTodo) {
                        updateTodo();
                    } else {
                        addTodo();
                    }
                }}
            >
                <input
                    className='py-2 px-4 border-2 border-solid border-black rounded-lg'
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter a new todo"
                />
                <button className="btnSuccess">{editingTodo ? 'Update Todo' : 'Add Todo'}</button>
            </form>
            <ul className='subtitle mt-8'>
                {todos.map((todo) => (
                    <>
                        <div className='flex flex-row items-center justify-center'>
                            <button className='btnError p-2 text-lg m-4' onClick={() => editTodo(todo)}>Edit</button>
                            <li className='bg-green-500 rounded-lg text-white p-3 text-lg m-4' key={todo.id}>{todo.text}</li>
                            <button className='btnError p-2 text-lg m-4' onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                        <hr />
                    </>
                ))}
            </ul>
        </div>
    );
};

export default CustomIDB;