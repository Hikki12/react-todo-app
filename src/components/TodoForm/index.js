import React from 'react';
import { TodoContext } from '../../TodoContext';
import './index.css';



function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form className="form-task" onSubmit={onSubmit}>
            <label className="form-title">Añade una Tarea</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                className="form-textarea"
                name=""
                placeholder="Ejemplo: Cortar Cebolla, pintar, dibujar"
            />
            <div className="buttons-container">
                <button 
                onClick={onCancel}
                className="cancel-task-button"
                >
                    Cancelar
                </button>
                <button 
                type="submit"
                className="add-task-button"
                >Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };