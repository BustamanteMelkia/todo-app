// import { TodoServiceImpl } from "../usercases/TodoService.jsx";
import { TodoRepository } from "./TodoRepository";
// Redux
import store from '../redux/store';
import {setTodos} from './todo.reducer';

export const getTodos = async()=>{
    // const todoRep = new TodoRepositoryImpl();
    // const todoService = new TodoServiceImpl(todoRep);
    const todosRep = new TodoRepository();
    const todos = await todosRep.getTodos();
    store.dispatch(setTodos(todos));
}