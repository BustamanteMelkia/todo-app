import Todo from "../domain/Todo";
import { TodoRepository } from "../domain/TodoRepository";

export interface TodoService{
    GetTodos(): Promise<Todo[]>;
}

export class TodoServiceImpl implements TodoService{
    todoRepository: TodoRepository;
    constructor(tr: TodoRepository){
        this.todoRepository = tr;
    }
    GetTodos(): Promise<Todo[]> {
        return this.todoRepository.GetTodos();
    }

}