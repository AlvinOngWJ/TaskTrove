// Importing necessary libraries
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

// Initializing array for tasks
const initialTasks = [
  { id: 1, content: 'Task 1', priority: 3, image: null, dueDate: null },
  { id: 2, content: 'Task 2', priority: 1, image: null, dueDate: null },
  { id: 3, content: 'Task 3', priority: 2, image: null, dueDate: null },
];

// Main Function
function App() {
  // Creating state for tasks
  const [tasks, setTasks] = useState(initialTasks);

  // Function to handle drag end
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Setting state after reorder
    setTasks(items);
  };

  // Function to handle image upload
  const handleImageUpload = (e, id) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, image: reader.result } : task
        )
      );
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // Function to handle due date change
  const handleDueDateChange = (e, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, dueDate: e.target.value } : task
      )
    );
  };

  // Render Function
  return (
    // Use DragDropContext provided by react-beautiful-dnd
    <DragDropContext onDragEnd={handleOnDragEnd}>
      {/* Create a droppable container */}
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
            {/* Map over the tasks and make each one draggable */}
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided) => (
                  <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <p>{task.content}</p>
                    <img src={task.image} alt="" />
                    <input type="file" onChange={(e) => handleImageUpload(e, task.id)} />
                    <input type="date" value={task.dueDate} onChange={(e) => handleDueDateChange(e, task.id)} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
