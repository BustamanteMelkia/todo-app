import React from 'react';
import { AnimatePresence } from 'framer-motion';
import './TodoList.css'
// Components
import TodoListItem from './TodoListItem';
// Redux
import { getTodos as getTodosSelector } from '../../todos/infrastructure/todos.reducer'
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(getTodosSelector);
    return (
        <>
            <h3 className='todos-title'>Todos - {todos.length}</h3>
            <ul className='todos-list'>
                <AnimatePresence>
                    {todos.map(todo=> <TodoListItem key={todo.id}  todo={todo} /> )}
                </AnimatePresence>
            </ul>
        </>
    );
}
 
export default TodoList;