import {ApiTodosList, GotTodoApi} from "../../types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";

interface test {
  todos: GotTodoApi[],
  gettingTodos: boolean,
}

const initialState: test = {
  todos: [],
  gettingTodos: false,
}


export const fetchTodos = createAsyncThunk(
  'todos/fetch',
  async () => {
    const responseTodos = await axiosApi.get<ApiTodosList | null>('/todos/.json');
    const todos = responseTodos.data;

    if(!todos) {
      return [];
    }

    const newTodos = Object.keys(todos).map(id => ({
      ...todos[id],
      id
    }));
    console.log(newTodos)
    return newTodos;
  }
)

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.gettingTodos = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.gettingTodos = false;
      state.todos = action.payload;
    })
  }
})

export const todosReducer = todos.reducer;