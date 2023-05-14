import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({ loading, error, completedTodos, totalTodos, searchValue, setSearchValue, completeTodo, deleteTodo, searchTodos }) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Hubo un error!!</p>}
        {!loading && searchValue && searchTodos.length == 0 && <p>!No se encuentra ningún Todo con esa descripción!</p>}
        {!loading && !searchValue && searchTodos.length == 0 && <p>!Crea tu primer Todo!</p>}

        {searchTodos.map((_todo) => (
          <TodoItem key={_todo.text} text={_todo.text} completed={_todo.completed} onComplete={() => completeTodo(_todo.text)} onDelete={() => deleteTodo(_todo.text)} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
