import React, { useState } from 'react';
import addIcon from '../../assets/icons/add.png';
import {addTodo} from '../../todos/infrastructure/todos.presenter';

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
            <div className={`form__group ${hasError?'form__group--error':''}`}>
                <input 
                    value={title} 
                    name='title'
                    className='form__control' 
                    onChange={handleChange} 
                    placeholder='Enter a new todo'
                />
            </div>
            <button type='submit' className='form__submit'>
                <img src={addIcon} alt="add icon" />
            </button>
        </form>
    );
}
 
export default TodoForm;