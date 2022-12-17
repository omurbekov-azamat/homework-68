import React from 'react';
import {GotTodoApi} from "../../types";

interface Props {
  todo: GotTodoApi;
}

const CardTodo: React.FC<Props> = ({todo}) => {
  const changeCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div className='d-flex justify-content-around'>
      <h4>{todo.title}</h4>
      <input
        id='condition'
        name='condition'
        onChange={changeCondition}
        type="checkbox"
      />
      <button>delete</button>
    </div>
  );
};

export default CardTodo;