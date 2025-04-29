import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const getAllTodos = () => prisma.todo.findMany();

export const createTodo = (name: string, status: string) => prisma.todo.create({
  data: { name, status },
});

export const updateTodo = (id: number, name: string, status: string) => prisma.todo.update({
  where: { id },
  data: { name, status },
});

export const deleteTodo = (id: number) => prisma.todo.delete({
  where: { id },
});
