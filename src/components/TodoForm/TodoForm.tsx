import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchTodos, onTodoSubmit} from "../Todos/todosThunks";
import ButtonSpinner from "../Spinner/ButtonSpinner";

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.todos.sending);

  const [todo, setTodo] = useState({
    title: '',
    status: false,
  });

  const onTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(prev => ({...prev, title: e.target.value}));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(onTodoSubmit(todo));
    await dispatch(fetchTodos());
    setTodo(prev => ({...prev, title: ''}));
  };

  return (
    <div className='col-6 p-5 text-center'>
      <form onSubmit={onFormSubmit}>
        <div className='d-flex justify-content-around align-items-center'>
          <div>
            <input
              type="text"
              name='todo'
              id='todo'
              value={todo.title}
              onChange={onTodoChange}
              required
              placeholder='todo...'
            />
          </div>
          <div>
            <button
              type='submit'
              disabled={loading}
              className='btn btn-primary'
            >
              {loading && <ButtonSpinner/>}
              Save
            </button>
          </div>
        </div>
      </form>
      <h5 className='mt-5'>Add new exercise</h5>
    </div>
  );
};

export default TodoForm;