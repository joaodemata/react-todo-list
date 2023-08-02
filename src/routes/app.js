import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './home/home_page';
import { NewTodoPage } from './new/new_todo_page';
import { EditTodoPage } from './edit/edit_todo_page';

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/new" element={<NewTodoPage/>}/>
        <Route path="/edit/:id" element={<EditTodoPage/>}/>
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
    </HashRouter>
  );
}

export { App };
