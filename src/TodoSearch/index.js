import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(_event) => {
        setSearchValue(_event.target.value);
      }}
    />
  );
}

export { TodoSearch };
