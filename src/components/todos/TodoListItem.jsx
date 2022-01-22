import React, { useState } from 'react';
import removeIcon from '../../assets/icons/remove.png'

const TodoListItem = ({todo: {id,title, completed, userId}}) => {
    const [state, setState]=useState(false);
    const toggleState = e=>{
        setState(!state);

    }
    const handleChange = e=>{
    }
    return (  
        <li className='todo'>
            <div className="todo__check">

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        className='checkbox__input' 
                        checked={state} 
                        onChange={toggleState}
                        id={`check-${id}`}
                    />
                    <label className='checkbox__label' htmlFor={`check-${id}`}></label>
                </div>

            </div>
            <p className="todo__title">{title}</p>
            <button className='todo__remove'>
                <img src={removeIcon} alt="remove todo" />
            </button>
        </li>
    );
}
 
export default TodoListItem;