import {configureStore} from "@reduxjs/toolkit";
import {todoReduce} from "../components/CardTodo/CardTodoSlice";
import {todosReducer} from "../components/CardTodo/Todos";


export const store = configureStore({
  reducer: {
    todo: todoReduce,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;