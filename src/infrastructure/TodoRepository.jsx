import Todo from "../domain/Todo";
import axiosClient from './axios';

export class TodoRepository {
    async getTodos() {
        const {data} = await axiosClient.get('/todos');
        // const todos= data.map( ({id, title, completed, userId})=>{
        //     return new Todo(id, title, completed, userId);
        // })
        return data.slice(0,5);
    }
}