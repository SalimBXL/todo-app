import React, { useState } from "react";
import "./Todo.css";

const Todo = ({id, todo, update, remove}) => {

    const [editMode, setEditMode] = useState(false);
    const [task, setTask] = useState(todo.task);

    const toggleEditMode = () => setEditMode((prev) => !prev);

    const handleRemove = () => remove(id);

    const handleEdit = () => toggleEditMode();

    const handleChange = ({target}) => setTask(target.value);

    const handleCompleted = () => {
        const newTodo = {...todo};
        newTodo.completed = !todo.completed;
        update(id, newTodo);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {...todo};
        newTodo.task = task;
        update(id, newTodo);
        toggleEditMode();
    }

    const editForm = (
        <div className="Todo-form">
            <form onSubmit={handleSubmit}>
                <input  type="text" 
                    id={todo.id}
                    name="task"
                    value={task} 
                    onChange={handleChange}
                />
                <button><i class="fas fa-save" /></button>
            </form>
        </div>);

    const taskToShow = (<p className={todo.completed ? "Todo-task Todo-completed" : "Todo-task"}>{todo.task}</p>);

    return (
        <div className="Todo">
            {editMode ? editForm : taskToShow}
            <div className="Todo-actions">

                <button onClick={handleEdit}><i class="fas fa-pen" /></button>

                <button onClick={handleRemove}><i class="fas fa-trash" /></button>

                <button onClick={handleCompleted}>
                    {todo.completed 
                        ? <i class="fas fa-undo" />
                        : <i class="fas fa-check" />}
                </button>
            </div>
        </div>
    );
}

export default Todo;