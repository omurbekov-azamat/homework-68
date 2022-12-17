import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onChangeTitle, onTodoSubmit} from "../CardTodo/CardTodoSlice";
import {AppDispatch, RootState} from "../../app/store";
import ButtonSpinner from "../Spinner/ButtonSpinner";

const TodoForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todo);
  console.log(todo.sending);

  const onTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeTitle(e.target.value));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    await dispatch(onTodoSubmit());
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='mt-5'>
        <div className='d-flex'>
          <div>
            <input
              type="text"
              name='todo'
              id='todo'
              value={todo.title}
              onChange={onTodoChange}
              required
            />
          </div>
          <div>
            <button
              type='submit'
              disabled={todo.sending}
              className='btn btn-primary'
            >
              {todo.sending && <ButtonSpinner/>}
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;