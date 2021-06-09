import storage from '../storage';

async function setTodos(todos) {
  await storage.setItem('todos', JSON.stringify(todos));
}

async function getTodos() {
  try {
    const todos = await storage.getItem('todos');

    if (!todos) {
      return null;
    }
    return JSON.parse(todos);
  } catch (e) {
    return null;
  }
}

export default {
  setTodos,
  getTodos
}
