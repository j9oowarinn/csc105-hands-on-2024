import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');


  useEffect(() => {
    axios.get('http://localhost:3000/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.error('Error loading todos:', err));
  }, []);

  const handleAdd = async () => {
    if (newTodo.trim() === '') return;
    try {
      const res = await axios.post('http://localhost:3000/todos', {
        name: newTodo,
        status: 'incomplete', // เริ่มด้วยสถานะ incomplete
      });
      setTodos([...todos, res.data]);
      setNewTodo('');
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  const handleToggle = async (id) => {
    const target = todos.find(todo => todo.id === id);
    const newStatus = target.status === 'incomplete' ? 'complete' : 'incomplete';

    try {
      const res = await axios.put(`http://localhost:3000/todos/${id}`, {
        ...target,
        status: newStatus,
      });
      setTodos(todos.map(todo => todo.id === id ? res.data : todo));
    } catch (err) {
      console.error('Error toggling status:', err);
    }
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditingText(name);
  };

  const handleSave = async (id) => {
    try {
      const res = await axios.put(`http://localhost:3000/todos/${id}`, {
        ...todos.find(todo => todo.id === id),
        name: editingText
      });
      setTodos(todos.map(todo => todo.id === id ? res.data : todo));
      setEditingId(null);
      setEditingText('');
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border rounded px-2 py-1 w-full"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-1 rounded">Add</button>
      </div>

      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
            {editingId === todo.id ? (
              <>
                <input
                  className="border rounded px-2 py-1 flex-1"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => handleSave(todo.id)} className="ml-2 text-green-500">Save</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => handleToggle(todo.id)}
                  className={`flex-1 cursor-pointer ${todo.status === 'complete' ? 'line-through text-gray-400' : ''}`}
                >
                  {todo.name}
                </span>
                <div className="flex gap-2 ml-2 items-center">
                  <span className="text-sm text-gray-600">{todo.status}</span>
                  <Pencil className="w-4 h-4 text-blue-500 cursor-pointer" onClick={() => handleEdit(todo.id, todo.name)} />
                  <Trash2 className="w-4 h-4 text-red-500 cursor-pointer" onClick={() => handleDelete(todo.id)} />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
