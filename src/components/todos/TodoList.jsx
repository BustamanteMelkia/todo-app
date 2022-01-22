import React from 'react';
import TodoListItem from './TodoListItem';
import { getTodos } from '../../infrastructure/todo.reducer'
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(getTodos);
    console.log(todos);
    return (
        <ul className='todos__list'>
            {todos.map(todo=> <TodoListItem key={todo.id} todo={todo}/>)}
        </ul>
    );
}
 
export default TodoList;