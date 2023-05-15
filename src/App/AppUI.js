import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import React from 'react';

function AppUI() {
  const { loading, error, searchValue, completeTodo, deleteTodo, searchTodos } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchValue && searchTodos.length == 0 && <EmptyTodos />}
        {!loading && !searchValue && searchTodos.length == 0 && <EmptyTodos />}

        {searchTodos.map((_todo) => (
          <TodoItem key={_todo.text} text={_todo.text} completed={_todo.completed} onComplete={() => completeTodo(_todo.text)} onDelete={() => deleteTodo(_todo.text)} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
