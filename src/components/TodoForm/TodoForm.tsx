import React, {useState} from 'react';
import {SendTodo} from "../../types";
import axiosApi from "../../axiosApi";

const TodoForm = () => {
  const [todo, setTodo] = useState<SendTodo>({
    title: '',
    status: false,
  });

  const onTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(prev => ({...prev, title: e.target.value}));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axiosApi.post('/todos.json', todo)
    } finally {

    }
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
            <button type='submit'>Save</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;