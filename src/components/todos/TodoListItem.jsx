import React from 'react';
import removeIcon from '../../assets/icons/remove.png'
import { removeTodo, toggleStatus } from '../../todos/infrastructure/todos.presenter';

const TodoListItem = ({todo: { id, title, completed}}) => {
    const handleStatusToggle = _=>{
        toggleStatus(id);
    }
    const handleRemove = _=>{
        removeTodo(id)
    }
    return (  
        <li className='todo' >
            <div className="todo__check">

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        className='checkbox__input' 
                        checked={completed} 
                        onChange={handleStatusToggle}
                        id={`todo-${id}`}
                    />
                    <label className='checkbox__label' htmlFor={`todo-${id}`}></label>
                </div>

            </div>
            <p className={`todo__title ${completed?'todo__title--completed':''}`}>
                {title}
            </p>

            <button className='todo__remove' onClick={handleRemove}>
                <img src={removeIcon} alt="remove todo" />
            </button>
        </li>
    );
}
 
export default TodoListItem;