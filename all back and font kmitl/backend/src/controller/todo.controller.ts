import type { Context } from 'hono';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../model/todo.model.ts';

export const handleGetTodos = async (c: Context) => {
  const todos = await getAllTodos();
  return c.json(todos);
};

export const handleCreateTodo = async (c: Context) => {
  const body = await c.req.json();
  const todo = await createTodo(body.name, body.status ?? 'incomplete'); // รองรับ default
  return c.json(todo);
};

export const handleUpdateTodo = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const body = await c.req.json();
  const todo = await updateTodo(id, body.name, body.status);
  return c.json(todo);
};

export const handleDeleteTodo = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const todo = await deleteTodo(id);
  return c.json(todo);
};
