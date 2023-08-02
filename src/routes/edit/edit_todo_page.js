import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function EditTodoPage () {
  const location = useLocation();
  const { id } = useParams();
  const { state, stateUpdaters } = useTodos();
  const ID = Number(id);

  let todoText = '';

  if(location.state?.todo){
    todoText = location.state.todo.text;
  }
  else if(state.loading){
    return <p>Cargando...</p>;

  }else{
    const todo = state.getTodo(ID);
    todoText = todo?.text;
  }

  return (
    <TodoForm
      label="Edita tu TODO"
      defaultTodoText={todoText}
      submitText="Editar"
      submitEvent={(newText)=> stateUpdaters.editTodo(ID, newText)}
            // addTodo={addTodo}
            // setOpenModal={setOpenModal}
    />
  );
}

export { EditTodoPage };