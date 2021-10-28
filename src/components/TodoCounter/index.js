import React from 'react';
import './index.css';

function TodoCounter({ total, completed }){
    return(
        <h2 className="todo-counter-title">Has completado {completed} de {total} ToDo(s)</h2>
    )
}

export { TodoCounter };