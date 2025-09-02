import { useState } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue.trim()
      };
      
      setTasks([...tasks, newTask]);
      
      setInputValue('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>My To-Do List
        By Safe node⚡
      </h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
          style={{
            flex: 1,
            padding: '10px',
            border: '2px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
          No tasks yet. Add one above!
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                margin: '5px 0',
                backgroundColor: '#f8f9fa',
                border: '1px solid #dee2e6',
                borderRadius: '4px'
              }}
            >
              <span style={{ fontSize: '16px' }}>{task.text}</span>
              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
        Total tasks: {tasks.length}
      </div>
    </div>
  );
}