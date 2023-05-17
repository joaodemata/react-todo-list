import './TodoForm.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValuve] = React.useState('');

  const onSubmit = (_event) => {
    _event.preventDefault(); // Necesario para que no se recargue
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (_event) => {
    setNewTodoValuve(_event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Realizar la aplicacion para la uni" value={newTodoValue} onChange={onChange} />
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
        {/* Este es de tipo submit por defecto, por eso se ejectua el envento en el form */}
      </div>
    </form>
  );
}

export { TodoForm };
