import React from 'react';
import './index.css';

function CreateTodoButton({ setOpenModal }){
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };


  return (
  // react interpreta las llaves vacias como un Fragment
    <>
      <button 
        className="add-button"  
        type="submit"
        onClick={onClickButton} 
      >
        +
      </button>
    </>
  );
};

export { CreateTodoButton };