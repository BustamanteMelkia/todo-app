import Todo from './Todo';

export interface ItemRepository{
    getTodos(): Promise<Todo[]>
}