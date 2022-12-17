import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import CardTodo from "./CardTodo";
import {ApiTodosList, GotTodoApi} from "../../types";

const CardTodos = () => {
  const [todo, setTodo] = useState<GotTodoApi[]>([]);

  const fetchTodos = useCallback(async () => {
    try {
      const responseTodos = await axiosApi.get<ApiTodosList>('/todos/.json');
      const todos = responseTodos.data;

      if(!todos) {
        setTodo([]);
        return;
      }

      const newTodos = Object.keys(todos).map(id => ({
        ...todos[id],
        id
      }));

      setTodo(newTodos);

    } finally {

    }
  }, []);

  useEffect(() => {
    void fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      {todo.map((item) => (
        <CardTodo
          key={item.id}
          todo={item}
        />
      ))}
    </div>
  );
};

export default CardTodos;