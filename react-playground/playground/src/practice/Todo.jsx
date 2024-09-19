import React, { useState, useEffect } from "react";


const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
            const result = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await result.json();
            setTodos(data);
            setLoading(false);
        };
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Todo;