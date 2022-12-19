import React from 'react';
import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <TodoForm/>
        <Todos/>
      </div>
    </div>
  );
}

export default App;
