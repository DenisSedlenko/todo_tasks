import React, { useCallback, useEffect } from 'react';
import adapter from '../packages/adapters/todo.adapter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import Todo from '../components/Todo/Todo';
import TodoList from '../components/Todo/TodoList';
import Form from '../ui/Forms/Form';
import Input from '../ui/Forms/Input';

import { useTodo } from '../components/Todo/hooks/useTodo';

import './Home.css';

function Home() {
  let setFormValue;

  const {
    todos,
    edited,
    onChangeTodos,
    onCreateTask,
    onEditTask,
    onSaveTask,
    onRemoveTask,
  } = useTodo();

  const onEdit = useCallback(todo => {
    setFormValue('text', todo.text);
    onEditTask(todo);
  }, []);

  const onClear = useCallback(() => {
    setFormValue('text', '');
    onEditTask(null);
  }, []);

  const onSubmit = useCallback(
    task => {
      setFormValue('text', '');

      if (edited) {
        onSaveTask({ ...edited, ...task });
      } else {
        onCreateTask(task);
      }
    },
    [edited]
  );

  useEffect(() => {
    (async function getTodos() {
      const _todos = await adapter.getTodos();
      onChangeTodos(_todos);
    })();
  }, []);

  useEffect(() => {
    (async function saveTodos() {
      await adapter.saveTodos(todos);
    })();
  }, [todos]);

  return (
    <div className="container">
      <header>
        <h1>Todos</h1>
      </header>
      <Form className="todo-form" onSubmit={onSubmit}>
        {({ register, watch, setValue }) => {
          setFormValue = setValue;
          return (
            <>
              <Input
                autoFocus
                className="todo-form__input"
                placeholder="Please enter todo"
                {...register('text')}
              />
              {watch('text') && (
                <button type="submit">
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              )}
              {watch('text') && (
                <button onClick={onClear}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              )}
            </>
          );
        }}
      </Form>
      {!!todos.length && (
        <TodoList>
          {todos.map(t => (
            <Todo
              todo={t}
              key={t.id}
              onUpdate={onSaveTask}
              onEdit={onEdit}
              onRemove={onRemoveTask}
            />
          ))}
        </TodoList>
      )}
    </div>
  );
}

export default Home;
