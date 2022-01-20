import Todo from "../domain/Todo";
import { TodoRepository } from "../domain/TodoRepository";

export const url = 'https://jsonplaceholder.typicode.com/todos';

export class TodoRepositoryImpl implements TodoRepository{

    async getTodos(): Promise<Todo[]> {
        return [];
    }
}