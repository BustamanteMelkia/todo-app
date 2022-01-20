import Todo from './Todo';

export interface TodoRepository{
    getTodos(): Promise<Todo[]>
}