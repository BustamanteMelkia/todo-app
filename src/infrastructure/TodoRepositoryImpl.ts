import Todo from "../domain/Todo";
import { TodoRepository } from "../domain/TodoRepository";
import axiosClient from './axios';

export class TodoRepositoryImpl implements TodoRepository{
    async getTodos(): Promise<Todo[]> {
        const {data} = await axiosClient.get('/todos');
        const todos: Todo[] = data.map( ({id, title, completed, userId})=>{
            return new Todo(id, title, completed, userId);
        })
        return todos.slice(0,5);
    }
}