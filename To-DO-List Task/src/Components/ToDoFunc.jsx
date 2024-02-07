import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import Todo from "./ToDo";
import EditToDo from "./EditToDo";


const ToDoFunc = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])

    }


    const markDone = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));

    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id); setTodos(newTodos);
    }


    const editTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));


    }

    const editTask = (task, id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));
    };


    return (
        <div className='ToDoCover'>
            <h1>✨ To-Do List ✨</h1>
            <ToDoForm
                addTodo={addTodo} />
            {todos.map((todo) => (todo.isEditing ? (

                <EditToDo
                    key={todo.id}
                    editTodo={editTask}
                    task={todo}
                />) :

                (
                    <Todo
                        task={todo}
                        key={todo.id}
                        markDone={markDone}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )

            ))}
        </div>
    )
}


export default ToDoFunc;