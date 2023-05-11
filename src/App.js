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

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTODOS.map((_todo) => (
          <TodoItem key={_todo.text} text={_todo.text} completed={_todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
