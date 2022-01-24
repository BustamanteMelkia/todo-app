import React from 'react';
// Components
import TodoListItem from './TodoListItem';
// Redux
import { getTodos as getTodosSelector } from '../../todos/infrastructure/todos.reducer'
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(getTodosSelector);
    return (
        <>
            <h3 className='todos__title'>Todos - {todos.length}</h3>
            <ul className='todos__list'>
                {todos.map(todo=> <TodoListItem key={todo.id} todo={todo} />)}
            </ul>
        </>
    );
}
 
export default TodoList;