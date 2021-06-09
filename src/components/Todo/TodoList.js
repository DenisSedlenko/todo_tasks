import React from 'react';
import './Todos.css';

const TodoList = ({ children }) => (
  <>
    <ul className="todo-list">{children}</ul>
  </>
);

export default TodoList;
