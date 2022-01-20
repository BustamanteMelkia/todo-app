import Todo from './Todo';

export interface TodoRepository{
    GetTodos(): Promise<Todo[]>
}