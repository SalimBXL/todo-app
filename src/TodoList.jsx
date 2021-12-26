import React, { useState } from "react";
import "./TodoList.css";
import uuid from "react-uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: uuid(), task: "Do something...", completed: false },
        { id: uuid(), task: "Do something else", completed: true }
    ]);

    const create = (todo) => setTodos(prev => [...prev, todo]);

    const update = (id, todo) => setTodos((prevs) => prevs.map((item) => (item.id === id) ? todo : item));

    const remove = (id) => setTodos(prev => prev.filter(todo => todo.id !== id))

    const todoItems = todos.map((todo) => <Todo 
        key={todo.id} 
        id={todo.id} 
        todo={todo} 
        update={update}
        remove={() => remove(todo.id)}
    />);

    return (<div className="TodoList">
        <h1>
            Todo List!
            <span>A Simple React TodoList App.</span>
        </h1>
        {todoItems}
        <NewTodoForm create={create}/>
    </div>);
}

export default TodoList;