import React, { useState } from 'react';
import {addTodo} from '../../todos/infrastructure/todos.presenter';
import './TodoForm.css';

const TodoForm = () => {
    const [data, setData] = useState({
        title: ''
    });
    const {title} = data;
    const [hasError, setError] = useState(false);

    const handleChange = e=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e=>{
        e.preventDefault();
        if(!title.trim()){
            setError(true);
            return;
        }
        const newTodo = {...data, completed: false};
        addTodo(newTodo);

        // Reset title field
        setData({ ...data, title: ''});
        setError(false);
    }
    return (
        <form className={`form`} onSubmit={handleSubmit}>
            <div className={`form-group ${hasError?'form-group--error':''}`}>
                <input 
                    value={title} 
                    name='title'
                    className='form-control' 
                    onChange={handleChange} 
                    placeholder='What needs to be done?'
                />
            </div>
            <button type='submit' className='form-submit'>
                <img 
                    src='https://melkia99.blob.core.windows.net/images/add.png' 
                    alt="add icon" 
                />
            </button>
        </form>
    );
}
 
export default TodoForm;