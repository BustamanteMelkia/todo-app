import React from 'react';
import TodoListItem from './TodoListItem';
import { getTodos as getTodosSelector } from '../../todos/infrastructure/todos.reducer'
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(getTodosSelector);
    return (
        <ul className='todos__list'>
            {todos.map(todo=> <TodoListItem key={todo.id} todo={todo}/>)}
        </ul>
    );
}
 
export default TodoList;