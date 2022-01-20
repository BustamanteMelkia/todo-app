export class Todo {
    id: string;
    title: string;
    completed: boolean;
    userId: string;
    
    constructor(id: string, title: string, completed: boolean, userId: string ){
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.userId = userId;
    }
}

export default Todo;