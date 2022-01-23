import React, { useState } from 'react';
import addIcon from '../../assets/icons/add.png';
import {addTodo} from '../../todos/infrastructure/todos.presenter';

const TodoForm = () => {
    const [data, setData] = useState({
        title: ''
    });
    const {title} = data;

    const handleChange = e=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e=>{
        e.preventDefault();
        if(!title.trim())
            return;
        const newTodo = {...data, completed: false};
        addTodo(newTodo);

        // Reset title field
        setData({ ...data, title: ''});
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                value={title} 
                name='title'
                className='form__control' 
                onChange={handleChange} 
                placeholder='Enter a new todo'
            />
            <button type='submit' className='form__submit'>
                <img src={addIcon} alt="add icon" />
            </button>
        </form>
    );
}
 
export default TodoForm;