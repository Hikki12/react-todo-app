import React from 'react';
import { TodoContext } from '../../TodoContext';
import './index.css';

function TodoCounter(){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return(
        <h2 className="todo-counter-title">Has completado {completedTodos} de {totalTodos} ToDo(s)</h2>
    )
}

export { TodoCounter };