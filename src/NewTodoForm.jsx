import React, { useState } from "react";
import "./NewTodoForm.css";
import uuid from "react-uuid";

const NewTodoForm = ({create}) => {
    const [todo, setTodo] = useState("");

    const handleChange = ({target}) => {
        setTodo(target.value);
    }

    const handleSubmit = (event) => { 
        event.preventDefault();
        if (todo.length > 0) {
            const newTask = { id: uuid(), task: todo, completed: false };
            create(newTask);
        };
        setTodo("");
    }

    return (<div className="NewTodoForm">
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">New Todo : </label>
            <input  id="task"
                    name="task"
                    placeholder="Your task here..." 
                    value={todo} 
                    onChange={handleChange} />
            <button><i class="fas fa-plus" /></button>
        </form>
    </div>);
}

export default NewTodoForm;