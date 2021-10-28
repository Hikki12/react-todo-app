// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Navbar } from './components/navbar';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/createTodoButton";

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomar Curso de React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
  
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter( todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <>
      <Navbar/>
      <section className="section">
        <div className="container">
        
          <TodoCounter
            completed={completedTodos}
            total={totalTodos}
          />

          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          
          <TodoList>
            {searchedTodos.map(todo =>(
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed} 
                />
            ))} 
          </TodoList>

          <CreateTodoButton/>
        </div>
      </section>
    </>
  );
}

export default App;
