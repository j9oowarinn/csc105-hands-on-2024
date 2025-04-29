import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import router from './router/index.routes.ts';

const app = new Hono();

// เปิด CORS
app.use('*', cors());

app.route('/', router);

serve({
  fetch: app.fetch,
  port: 3000,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});
