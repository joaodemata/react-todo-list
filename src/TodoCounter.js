import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  const message = total == completed ? 'Felicidades completaste todos las tareas!' : `Has completado <span>${completed}</span> de <span>${total}</span> TODOS`;
  return <h1 className="TodoCounter">{message} </h1>;
}

export { TodoCounter };
