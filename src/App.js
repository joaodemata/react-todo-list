import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTODOS = [
  { text: 'primera tarea', completed: true },
  { text: 'segunda tarea', completed: false },
  { text: 'tercera tarea', completed: true },
  { text: 'cuarta tarea', completed: true },
  { text: 'quinta tarea', completed: true },
  { text: 'sexta tarea', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTODOS);

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

    setTodos(newTodos);
  };

  const deleteTodo = (_text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((_todo) => _todo.text == _text);

    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchTodos.map((_todo) => (
          <TodoItem key={_todo.text} text={_todo.text} completed={_todo.completed} onComplete={() => completeTodo(_todo.text)} onDelete={() => deleteTodo(_todo.text)} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
