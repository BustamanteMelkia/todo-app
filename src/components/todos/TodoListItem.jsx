import React from 'react';
import { usePresence, motion } from 'framer-motion';
import './TodoListItem.css'
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
            <div className="todo-check">

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        className='checkbox-input' 
                        checked={completed} 
                        onChange={()=>toggleStatus(id)}
                        id={`todo-${id}`}
                    />
                    <label className='checkbox-label' htmlFor={`todo-${id}`}></label>
                </div>

            </div>
            <p className={`todo-title ${completed?'todo-title--completed':''}`}>
                {title}
            </p>

            <button className='todo-remove' onClick={()=>removeTodo(id)}>
                <img 
                    src='https://melkia99.blob.core.windows.net/images/remove.png' 
                    alt="remove todo" 
                />
            </button>
        </motion.li>
    );
}
 
export default TodoListItem;