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
    setTodo: (state, { payload: todo })=>({
      ...state,
      list: [
        ...state.list, {
          ...todo,
          id: nextTodoId(state.list)
        }]
    }),
    removeTodo: (state, { payload: todoId})=>({
      ...state,
      list: state.list.filter( todo=>todo.id!==todoId )
    })
  },
});

export const { setTodos, setTodo,removeTodo } = slice.actions;

export default slice.reducer;

// Selector
export const getTodos = (store) => store.todos.list;
