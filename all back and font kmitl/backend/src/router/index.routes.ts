import { Hono } from 'hono';
import todoRoute from './todo.routes.ts';

const router = new Hono();

router.route('/todos', todoRoute);

export default router;
