import React from 'react';
import './index.css';

function TodoItem(props){
    const onComplete = () => {
        alert('completado: ' + props.text);
    }

    const onDelete = () => {
        alert('borraste: ' + props.text);
    }

    return(
        <li className="todo-item">
            <input onClick={onComplete}  type="checkbox" className="todo-item-check"/>
            <p className="todo-item-text">{props.text}</p>
            <span className="todo-item-delete is-completed" onClick={onDelete}><i class="fa fa-trash"></i></span>
        </li>
    )
}

export { TodoItem };