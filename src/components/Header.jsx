# Minor edit
```javascript
import React, { useState } from 'react';

function Header({ addTask }) {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskDescription.trim()) {
      addTask(newTaskDescription);
      setNewTaskDescription('');
    }
  };

  return (
    <header>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </header>
  );
}

export default Header;