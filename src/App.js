import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
import React from 'react';
import './App.css';

const defaultTODOS = [
  {text: 'primera tarea', completed: true},
  {text: 'segunda tarea', completed: false},
  {text: 'tercera tarea', completed: true},
  {text: 'cuarta tarea', completed: true},
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={15} total={25}/>
      <TodoSearch/>

      <TodoList> 
        {defaultTODOS.map(_todo=>(
          <TodoItem key={_todo.text} text={_todo.text} completed={_todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButtom/>
    </React.Fragment>
  );
};


export default App;
