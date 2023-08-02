import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function NewTodoPage () {
  const { stateUpdaters } = useTodos();

  return (
    <TodoForm
      label="Escribe tu nuevo TODO"
      submitText="Añadir"
      submitEvent={(text)=> stateUpdaters.addTodo(text)}
            // addTodo={addTodo}
            // setOpenModal={setOpenModal}
    />
  );
}

export { NewTodoPage };