import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <ToDoForm onAdd={() => {}} />
      <ToDoList />
    </div>
  );
}

export default App;
