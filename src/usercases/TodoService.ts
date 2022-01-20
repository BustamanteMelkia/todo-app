import Todo from "../domain/Todo";
import { TodoRepository } from "../domain/TodoRepository";

export interface TodoService{
    getTodos(): Promise<Todo[]>;
}

export class TodoServiceImpl implements TodoService{
    todoRepository: TodoRepository;
    constructor(tr: TodoRepository){
        this.todoRepository = tr;
    }
    async getTodos(): Promise<Todo[]> {
        return this.todoRepository.getTodos();
    }

}