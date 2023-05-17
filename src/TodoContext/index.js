import React from 'react';
import { useLocalStorage } from '../services/util.service';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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

  const addTodo = (_text) => {
    const newTodos = [...todos];

    newTodos.push({ text: _text, completed: false });

    saveTodos(newTodos);
  };

  return <TodoContext.Provider value={{ loading, error, completedTodos, totalTodos, searchValue, setSearchValue, completeTodo, deleteTodo, addTodo, searchTodos, openModal, setOpenModal }}>{children}</TodoContext.Provider>;
}

export { TodoContext, TodoProvider };
