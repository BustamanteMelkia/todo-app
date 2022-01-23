import { TodoRepository } from "./todos.repository";
// Redux
import store from '../../redux/store';
import {setTodos, removeTodo as removeTodoAction} from './todos.reducer';

export const getTodos = async()=>{
    const todosRep = new TodoRepository();
    const todos = await todosRep.getTodos();
    store.dispatch(setTodos(todos));
}

export const removeTodo = (todoId) =>{
    store.dispatch(removeTodoAction(todoId));
}
