import React from 'react';
import { useLocalStorage } from '../services/util.service';
import { AppUI } from './AppUI';

// const defaultTODOS = [
//   { text: 'primera tarea', completed: true },
//   { text: 'segunda tarea', completed: false },
//   { text: 'tercera tarea', completed: true },
//   { text: 'cuarta tarea', completed: true },
//   { text: 'quinta tarea', completed: true },
//   { text: 'sexta tarea', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.getItem()
// localStorage.removeItem()

function App() {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((_todos) => _todos.completed).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter((_todo) => {
    return String(_todo.text).toLowerCase().includes(String(searchValue).toLowerCase());
  });

  const completeTodo = (_text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((_todo) => _todo.text == _text);

    newTodos[todoIndex].completed = true;

    saveTodos(newTodos);
  };

  const deleteTodo = (_text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((_todo) => _todo.text == _text);

    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  return <AppUI loading={loading} error={error} completedTodos={completedTodos} totalTodos={totalTodos} searchValue={searchValue} setSearchValue={setSearchValue} searchTodos={searchTodos} completeTodo={completeTodo} deleteTodo={deleteTodo} />;
}

export default App;
