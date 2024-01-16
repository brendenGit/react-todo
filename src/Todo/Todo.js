import React from "react";

function Todo({ text, id, removeTodo }) {

    const handleClick = (e) => {
        const id = e.target.parentNode.id;
        removeTodo(id);
    }

    return (
        <li id={id} >
            {text}
            <button onClick={handleClick}>X</button>
        </li>
    )
};

export default Todo;