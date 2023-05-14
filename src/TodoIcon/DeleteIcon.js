import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ onDelete }) {
  //TODO: esta vaina le hace falta los parentesis
  return <TodoIcon type="delete" color="gray" onClick={onDelete} />;
}

export { DeleteIcon };
