import React, { useState } from 'react';
import addIcon from '../../assets/icons/add.png'

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
    return (
        <form className="form">
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