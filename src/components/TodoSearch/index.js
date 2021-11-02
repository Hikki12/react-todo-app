import React from 'react';
import  { TodoContext } from '../../TodoContext';
import './index.css';

function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <div className="search-input-container">
            <input 
                className="search-input" 
                placeholder="Cebolla"
                value={searchValue} 
                onChange={onSearchValueChange}
            />
        </div>
    )
}

export { TodoSearch };