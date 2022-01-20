export class Todo {
    id: string;
    text: string;
    completed: boolean;
    userId: string;
    
    constructor(id: string, text: string, completed: boolean, userId: string ){
        this.id = id;
        this.text = text;
        this.completed = completed;
        this.userId = userId;
    }
}

export default Todo;