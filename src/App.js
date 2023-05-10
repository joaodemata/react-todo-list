import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
import './App.css';

function App() {
  return (
    <div className="App">

    <TodoCounter/>
    <TodoSearch/>

    <TodoList> 
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </TodoList>

    <CreateTodoButtom/>
    </div>
  );
};


export default App;
