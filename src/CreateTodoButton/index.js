import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(_event) => {
        console.log('prueba');
        console.log(_event.target);
      }}
    >
      +
    </button>
  );
}
export { CreateTodoButton };
