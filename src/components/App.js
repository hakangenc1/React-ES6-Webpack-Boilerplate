import React, { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState('');

  const handleChange = e => {
    setItem(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTodo([...todo, item]);
    setItem('');
  };

  return (
    <div>
      <input
        type="text"
        name="todo"
        onChange={handleChange}
        value={item}
        placeholder="Enter a todo item"
      />
      <button onClick={handleSubmit}>Add item</button>

      <h1>Todo</h1>
      {todo.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
}
