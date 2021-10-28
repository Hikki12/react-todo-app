import React from 'react';
import './index.css';

function TodoSearch({ searchValue, setSearchValue }){

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