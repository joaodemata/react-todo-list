import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return completedTodos == totalTodos ? (
    <h1 className="TodoCounter">Felicidades completaste todos las tareas! </h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span> {completedTodos}</span> de <span> {totalTodos}</span> TODOS{' '}
    </h1>
  );
}

export { TodoCounter };
