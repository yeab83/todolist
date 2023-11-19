import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center mt-24">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg ">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          To-Do List
        </h1>
        <div className="mb-4 flex items-center">
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-lg"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-red-500 text-white p-2 pl-6 pr-6 ml-2 rounded-lg"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center bg-gray-100 p-2 rounded-lg"
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span
                className={`flex-grow ${
                  task.completed
                    ? 'line-through text-gray-500'
                    : 'text-gray-800'
                }`}
              >
                {task.name}
              </span>
              <button
                className="bg-red-500 text-white p-2 rounded-lg"
                onClick={() => removeTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
