import { useState } from "react";
import { v4 as uuid } from 'uuid';

import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm.js";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = ({ text }) => {
        console.log(text);
        const newTodo = { text, id: uuid() }
        setTodos(oldTodos => ([...oldTodos, newTodo]));
    };
 
    const removeTodo = (id) => {
        setTodos(oldTodos => (oldTodos.filter(todo => todo.id !== id)));
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <ul>
                {todos.map(todo => <Todo 
                                    text={todo.text} 
                                    id={todo.id}
                                    removeTodo={removeTodo}
                                />)}
            </ul>
        </div>
    )
};

export default TodoList;