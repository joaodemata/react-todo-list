import React from 'react';
import './TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmpty()}
      {(Number(props.totalTodos) !== 0 && !props.searchedTodos.length) && props.onEmptySearch(props.searchValue)}
      {/* {props.searchedTodos.map(todo => (
        props.render(todo)
        ))} */}

      <ul>
        {(!props.loading && !props.error) && props.searchedTodos.map(todo => (
          renderFunc(todo)
        ))}
      </ul>
    </section>
  );
}

export { TodoList };
