import { createSlice } from "@reduxjs/toolkit";

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export const slice = createSlice({
  name: "todos",

  initialState: {
    list: [],
  },

  reducers: {
    setTodos: (state, { payload: list }) => ({
      ...state,
      list,
    }),
    addTodo: (state, { payload: todo })=>{
      todo.id = nextTodoId(state.list);
      return ({
        ...state,
        list: [ todo, ...state.list ]
      })
    },

    removeTodo: (state, { payload: todoId})=>({
      ...state,
      list: state.list.filter( todo=>todo.id!==todoId )
    }),

    toggleStatus: (state, { payload: todoId})=>({
      ...state,
      list: state.list.map( 
        todo=> todo.id!==todoId 
        ? todo
        : ({ ...todo, completed: !todo.completed })
      )
    })
  },
});

export const { setTodos, addTodo,removeTodo, toggleStatus } = slice.actions;

export default slice.reducer;

// Selector
export const getTodos = (store) => store.todos.list;
