import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setToDos] = useState<ToDo[]>([]);

  const fetchToDos = async () => {
    const res = await axios.get('http://localhost:5000/todos');
    setToDos(res.data);
  };

  useEffect(() => {
    fetchToDos();
  }, []);

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchToDos();
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} 
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

