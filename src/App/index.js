// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false },
//   { text: 'Tomar Curso de React', completed: false },
//   { text: 'Llorar con la llorona', completed: true }
  
// ];



function App() {

  return (
    <TodoProvider>
      < AppUI />
    </TodoProvider>
  );
}

export default App;
