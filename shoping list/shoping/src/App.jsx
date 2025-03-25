import React, { useState, useEffect } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("shoppingList")) || [];
    setItems(savedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { id: Date.now(), text: input, bought: false }]);
      setInput("");
    }
  };

  const toggleBought = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, bought: !item.bought } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, text) => {
    setEditingId(id);
    setInput(text);
  };

  const saveEdit = () => {
    setItems(items.map(item => item.id === editingId ? { ...item, text: input } : item));
    setEditingId(null);
    setInput("");
  };

  return (
    <div className="container">
      <h2>Shopping List</h2>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {editingId !== null ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={addItem}>Add</button>
        )}
      </div>
      <ul className="list">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleBought(item.id)}
            className={item.bought ? "bought" : ""}
          >
            {item.text}
            <div>
              <button onClick={(e) => { e.stopPropagation(); editItem(item.id, item.text); }}>Edit</button>
              <button onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
