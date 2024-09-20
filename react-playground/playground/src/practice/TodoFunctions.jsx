import React, {useState} from "react";


//create const component
const TodowithFunctions = () => {
    const [todos, setTodos] = useState([]);
    const [newtodo, setNewTodos] = useState('');

    const createNewTodo = () => {
        //set the todos as the new, add to the list
        setTodos([...todos, newtodo]);
        setNewTodos('');
    }

    const removeTodo = (index) => {
        //removing a todo from the list of todos
        //set todos as the list from an index given
        const newtodo = todos.filter((_, i) => i !== index)
        setTodos(newtodo)
    }

    return (
        <div>
            <input 
            type="text"
            value={newtodo} 
            onChange={(e) => setNewTodos(e.target.value)}
            />
            <button onClick={createNewTodo}>add a todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>remove todo</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodowithFunctions