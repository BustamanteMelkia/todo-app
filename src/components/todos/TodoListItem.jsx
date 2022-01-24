import React from 'react';
import { usePresence, motion } from 'framer-motion';

import removeIcon from '../../assets/icons/remove.png'
import { removeTodo, toggleStatus } from '../../todos/infrastructure/todos.presenter';

const TodoListItem = ({todo: { id, title, completed}}) => {
    const [isPresent, safeToRemove] = usePresence();

    const animations = {
      layout: true,
      initial: "out",
      animate: isPresent ? "in" : "out",
      variants: {
        in: { scaleY: 1, opacity: 1 },
        out: { scaleY: 0, opacity: 0, zIndex: -1 }
      },
      onAnimationComplete: () => !isPresent && safeToRemove(),
      transition: { type: "spring", stiffness: 300, damping: 30 }
    };

    return (  
        <motion.li className='todo' {...animations} >
            <div className="todo__check">

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        className='checkbox__input' 
                        checked={completed} 
                        onChange={()=>toggleStatus(id)}
                        id={`todo-${id}`}
                    />
                    <label className='checkbox__label' htmlFor={`todo-${id}`}></label>
                </div>

            </div>
            <p className={`todo__title ${completed?'todo__title--completed':''}`}>
                {title}
            </p>

            <button className='todo__remove' onClick={()=>removeTodo(id)}>
                <img src={removeIcon} alt="remove todo" />
            </button>
        </motion.li>
    );
}
 
export default TodoListItem;