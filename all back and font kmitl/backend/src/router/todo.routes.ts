import { Hono } from 'hono';
import { handleGetTodos, handleCreateTodo, handleUpdateTodo, handleDeleteTodo } from '../controller/todo.controller.ts';

const todoRoute = new Hono();

todoRoute.get('/', handleGetTodos);
todoRoute.post('/', handleCreateTodo);
todoRoute.put('/:id', handleUpdateTodo);
todoRoute.delete('/:id', handleDeleteTodo);


export default todoRoute;
