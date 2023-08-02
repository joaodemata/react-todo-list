import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './TodoSearch.css';

function TodoSearch({ searchValue, searchTodos, loading }) {
  const onSearchValueChange = (event) => {
    searchTodos(event.target.value);
  };

  return <input className="TodoSearch" placeholder="Cebolla" value={searchValue} onChange={onSearchValueChange} disabled={loading} />;
}

export { TodoSearch };
