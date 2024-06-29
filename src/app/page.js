'use client';
import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import AddButton from './components/AddButton';
import ListItem from './models/ListItemModel';

const Home = () => {
  const [newNoteText, setNewNoteText] = useState("")
  const [items, setItems] = useState([]);
  const [warning, setWarning] = useState("");

  const handleAddButton = () => {
    if (newNoteText.trim() === "") {
      // Show a warning when the task text is empty
      setWarning("Task text is empty. Please, add a name to the task.");
      return;
    }
    const listItem = new ListItem(newNoteText);
    setItems([...items, listItem]); // Append the new item to the existing array
    setNewNoteText("");
    setWarning(""); // Reset warning
  }
  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleInputChange = (event) => {
    setNewNoteText(event.target.value);
    setWarning(""); // Reset warning on typing
  }

  const handleCheckboxChange = (index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, done: !item.done }; // Toggle the done property
      }
      return item;
    });
    setItems(updatedItems);
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="p-12  text-center">
        <p className="text-4xl font-bold ">Todo List</p>
      </div>
      <div className="py-4 flex justify-center">
        <input
          placeholder="Insert text"
          className="rounded-lg h-10 w-80 mx-4 text-black p-2"
          value={newNoteText}
          onChange={handleInputChange}
        />
        <AddButton action={handleAddButton} />
      </div>
      {warning && (
        <div className="text-red-500 text-center mb-4">
          {warning}
        </div>
      )}
      <TodoList
        items={items}
        onCheckboxChange={handleCheckboxChange}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}
export default Home;
