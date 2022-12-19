import React, {useEffect} from 'react';
import {AppDispatch} from "../../app/store";
import {useDispatch} from "react-redux";
import {fetchTodos} from "./todosThunks";
import TodoItem from "./TodoItem";
import Spinner from "../Spinner/Spinner";
import {useAppSelector} from "../../app/hooks";

const Todos = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (todos.gettingTodos) {
    return (
      <Spinner/>
    )
  }

  if (todos.todos.length === 0) {
    return (
      <h4 className='col-6'>There are no todos</h4>
    )
  } else {
    return (
      <div className='col-6'>
        {todos.todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
          />
        ))}
      </div>
    );
  }


};

export default Todos;