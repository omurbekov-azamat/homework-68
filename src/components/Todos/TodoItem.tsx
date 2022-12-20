import React from 'react';
import {GotTodoApi} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {changeStatus, deleteTodo, fetchTodos} from "./todosThunks";
import ButtonSpinner from "../Spinner/ButtonSpinner";

interface Props {
  todo: GotTodoApi;
}

const TodoItem: React.FC<Props> = ({todo}) => {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.todos.id);

  const changeCondition = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await dispatch(changeStatus({
      task: {
        ...todo,
        status: e.target.checked,
      },
      id: todo.id,
    }));
    await dispatch(fetchTodos());
  };

  const onDeleteTodo = async (id: string) => {
    await dispatch(deleteTodo(id));
    await dispatch(fetchTodos());
  };

  return (
      <div
        className='d-flex align-items-center mt-2 border border-light p-2'
      >
        <h4 className='m-0'>{todo.title}</h4>
        <input
          id='condition'
          name='condition'
          onChange={changeCondition}
          type="checkbox"
          className='ms-auto'
          checked={todo.status}
        />
        <button
          className='ms-5 btn btn-danger'
          onClick={() => onDeleteTodo(todo.id)}
          disabled={id === todo.id}
        >
          {id === todo.id && <ButtonSpinner/>}
          Delete
        </button>
      </div>
  );
};

export default TodoItem;