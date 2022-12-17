import React from 'react';
import TodoForm from "./components/TodoForm/TodoForm";
import CardTodos from "./components/CardTodo/CardTodos";

function App() {
  return (
    <div className='container'>
      <TodoForm/>
      <CardTodos/>
    </div>
  );
}

export default App;
