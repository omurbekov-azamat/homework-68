import {GotTodoApi} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {deleteTodo, fetchTodos, onTodoSubmit} from "./todosThunks";

interface MainState {
  todos: GotTodoApi[],
  gettingTodos: boolean,
  sending: boolean,
  id: string,
}

const initialState: MainState= {
  todos: [],
  gettingTodos: false,
  sending: false,
  id: '',
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
    builder.addCase(deleteTodo.pending, (state, action) => {
      state.id = action.meta.arg;
    });
    builder.addCase(deleteTodo.fulfilled, (state) => {
      state.id = '';
    });
  },
})

export const todosReducer = todosSlice.reducer;