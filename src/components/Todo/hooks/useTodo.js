import { useCallback, useState } from 'react';

export const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [edited, setEdited] = useState(null);

  const onEditTask = useCallback(task => {
    setEdited(task);
  }, []);

  const onSaveTask = useCallback(
    task => {
      const idx = todos.findIndex(t => t.id === task.id);
      const _todos = todos;
      if (idx > -1) {
        _todos[idx] = task;
      }

      setTodos([..._todos]);
      setEdited(null);
    },
    [todos]
  );

  const onCreateTask = useCallback(({ text }) => {
    setTodos(_todos =>
      [
        ..._todos,
        {
          id: _todos.length + 1,
          text,
        },
      ].sort((a, b) => b.text.localeCompare(a.text))
    );
  }, []);

  const onRemoveTask = useCallback(id => {
    setTodos(_todos => _todos.filter(t => t.id !== id));
  }, []);

  const onChangeTodos = useCallback(_todos => {
    setTodos((_todos || []).sort((a, b) => b.text.localeCompare(a.text)));
  }, []);

  return {
    todos,
    edited,
    onChangeTodos,
    onEditTask,
    onCreateTask,
    onSaveTask,
    onRemoveTask,
  };
};
