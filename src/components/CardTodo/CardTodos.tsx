import React,  {useEffect} from 'react';
import {AppDispatch, RootState} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "./Todos";
import CardTodo from "./CardTodo";
import Spinner from "../Spinner/Spinner";

const CardTodos = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (todos.gettingTodos) {
    return (
      <Spinner/>
    )
  }

  return (
    <div>
      {todos.todos.map((item) => (
        <CardTodo
          key={item.id}
          todo={item}
        />
      ))}
    </div>
  );
};

export default CardTodos;