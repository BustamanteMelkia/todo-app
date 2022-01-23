import React, { useState } from 'react';
import removeIcon from '../../assets/icons/remove.png'
import { removeTodo } from '../../todos/infrastructure/todos.presenter';

const TodoListItem = ({todo: {id,title, completed, userId}}) => {
    const [state, setState]=useState(false);
    const toggleState = _=>{
        setState(!state);

    }
    const handleRemove = _=>{
        removeTodo(id)
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
            <button className='todo__remove' onClick={handleRemove}>
                <img src={removeIcon} alt="remove todo" />
            </button>
        </li>
    );
}
 
export default TodoListItem;