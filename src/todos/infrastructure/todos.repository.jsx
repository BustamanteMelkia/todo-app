import { getAllTodos } from './todos.service';
import Todo from '../domain/Todo';

export class TodoRepository {
    async getTodos() {
        const {data} = await getAllTodos();
        // const todos = data.map((id, title, completed, userId)=>
        //     new Todo(id, title, completed, userId)
        // )
        return data.slice(0,5);
    }
    
}