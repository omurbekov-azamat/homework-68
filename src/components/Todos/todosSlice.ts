import {MainState} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {deleteTodo, fetchTodos, onTodoSubmit} from "./todosThunks";

const initialState: MainState= {
  todos: [],
  gettingTodos: false,
  sending: false,
  cancel: false,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.gettingTodos = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.gettingTodos = false;
    });
    builder.addCase(onTodoSubmit.pending, (state) => {
      state.sending = true;
    });
    builder.addCase(onTodoSubmit.fulfilled, (state) => {
      state.sending = false;
    });
    builder.addCase(deleteTodo.pending, (state) => {
      state.cancel = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state) => {
      state.cancel = false;
    });
  },
})

export const todosReducer = todosSlice.reducer;