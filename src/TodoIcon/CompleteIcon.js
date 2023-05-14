import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  //TODO: esta vaina le hace falta los parentesis
  return <TodoIcon type="check" color={completed ? 'green' : 'gray'} onClick={onComplete} />;
}

export { CompleteIcon };
