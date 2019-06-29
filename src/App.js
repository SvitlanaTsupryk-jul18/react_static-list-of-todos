import React from 'react';
import './App.css';
import TodoList from './Components/TodoList'

function App() {
  return (
    <div className="App">
      <header>
        <h1 style={{ textTransform: 'uppercase' }}>Todos list</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
