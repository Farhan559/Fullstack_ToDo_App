import React, { useState } from 'react';
import axios from 'axios';

interface ToDoFormProps {
  onAdd: () => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/todos', { title });
    setTitle('');
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New ToDo"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoForm;
