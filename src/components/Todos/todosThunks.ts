import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {RootState} from "../../app/store";
import {ApiTodosList, ChangeTodo, GotTodoApi, SendTodo} from "../../types";

export const onTodoSubmit = createAsyncThunk<void, SendTodo> (
  'todosSlice/submit',
  async (args) => {
    await axiosApi.post('/todos.json', args);
  }
);

export const fetchTodos = createAsyncThunk<GotTodoApi []>(
  'todos/fetch',
  async () => {
    const responseTodos = await axiosApi.get<ApiTodosList | null>('/todos/.json');
    const todos = responseTodos.data;

    let newTodos: GotTodoApi[] = [];

    if (todos) {
      newTodos = Object.keys(todos).map(id => {
        const todo = todos[id];
        return {
          ...todo,
          id,
        }
      });
    }
    return newTodos;
  }
);

export const deleteTodo = createAsyncThunk<void, string> (
  'todos/delete',
  async (args) => {
    await axiosApi.delete('/todos/' + args + '.json');
  }
);

export const changeStatus = createAsyncThunk<void , ChangeTodo, {state: RootState}>(
  'todos/status',
  async (args, thunkApi) => {

    const state = thunkApi.getState().todos.todos;
    let filtered = state.filter(function (e){return e.id === args.id});

    let fixTodo = {
      title: filtered[0].title,
      state: args.state,
    }
    await axiosApi.put('todos/' + args.id + '.json', fixTodo);
  }
)