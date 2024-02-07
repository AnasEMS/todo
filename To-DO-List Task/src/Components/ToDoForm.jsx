import React, { useState } from 'react';


const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    };


    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                value={value}
                placeholder='Add New Task'
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type='submit' className='todo-btn'> Add Task
            </button>

        </form>
    );
};



export default ToDoForm;