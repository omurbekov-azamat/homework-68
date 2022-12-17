import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {RootState} from "../../app/store";

export interface TodoState {
  title: string;
  status: boolean;
  sending: boolean;
}

const initialState: TodoState = {
  title: '',
  status: false,
  sending: false,
};

export const onTodoSubmit = createAsyncThunk<void, undefined, {state: RootState}> (
 'todo/fetch',
 async (args, thunkAPI) => {
   const todo = thunkAPI.getState().todo;
   await axiosApi.post('/todos.json', todo);
 }
);

export const CardTodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    onChangeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(onTodoSubmit.pending, (state) => {
      state.sending = true;
    });
    // builder.addCase(onTodoSubmit.fulfilled, (state) => {
    //   state.sending = false;
    // });
  }
});

export const todoReduce = CardTodoSlice.reducer;
export const {onChangeTitle} = CardTodoSlice.actions;