import React from 'react';
import './index.css';

function TodoItem(props){

    return(
        <li className="todo-item">
            <input onClick={props.onComplete} type="checkbox" className="todo-item-check" defaultChecked={props.completed}/>
            <p className={`todo-item-text ${props.completed && 'is-completed'}`}>{props.text}</p>
            <span 
                className="todo-item-delete is-completed" 
                onClick={props.onDelete}
            >
            <i className="fa fa-trash"></i>
            </span>
        </li>
    )
}

export { TodoItem };