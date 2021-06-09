import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

import './Todos.css';

const Todo = ({ todo, onEdit, onRemove, onUpdate }) => {
  return (
    <>
      <li className="todo-item">
        <div>
          <span
            className="todo-item__checker"
            onClick={() => onUpdate({ ...todo, completed: !todo.completed })}
          >
            {todo.completed && <FontAwesomeIcon icon={faCheckCircle} />}
          </span>
          <span>{todo.text}</span>
        </div>
        <div>
          <button className="complete-btn" onClick={() => onEdit(todo)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="trash-btn" onClick={() => onRemove(todo.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </li>
    </>
  );
};

export default React.memo(Todo);
