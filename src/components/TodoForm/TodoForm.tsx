import React, {useState} from 'react';
import ButtonSpinner from "../Spinner/ButtonSpinner";
import {fetchTodos, onTodoSubmit} from "../Todos/todosThunks";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.todos.sending);

  const [todo, setTodo] = useState({
    title: '',
    state: false,
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
    <div className='col-6'>
      <form onSubmit={onFormSubmit}>
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
              disabled={loading}
              className='btn btn-primary'
            >
              {loading && <ButtonSpinner/>}
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;