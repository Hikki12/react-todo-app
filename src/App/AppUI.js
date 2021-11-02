import React from "react";
import { TodoContext } from '../TodoContext';
import { Navbar } from '../components/navbar';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/createTodoButton";
import { TodoForm } from "../components/TodoForm";
import { Modal } from '../modal';

function AppUI(){

    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);
 
    return(
        <>
        <Navbar/>
        <section className="section">
          <div className="container">
          
            <TodoCounter/>
  
            <TodoSearch/>

            <TodoList>
                {loading && <p style={{color:'white'}}>Cargando...</p>}
                {!loading && <p style={{color:'white'}}>Datos cargados!</p>}
                {error && <p>Error...</p>}
                {(!loading && !searchedTodos.length) && <p style={{color:'white'}}>Crea tu primer TODO!</p>}
                {searchedTodos.map(todo =>(
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed} 
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                ))} 
              </TodoList>              
            
            {!!openModal && (
              <Modal>
                <TodoForm/>
              </Modal>
            )}

            <CreateTodoButton
              setOpenModal={setOpenModal}
            />
          </div>
        </section>
      </>
    );
}

export { AppUI };