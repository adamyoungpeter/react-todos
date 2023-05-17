import React, { useState } from "react";
import "./App.css";
import ToDoTable from "./components/ToDoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed Puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water Plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make Dinner", rowAssigned: "User One" },
    {
      rowNumber: 4,
      rowDescription: "Charge Phone Battery",
      rowAssigned: "User One",
    },
  ]);

  const addToDo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <ToDoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            className="btn btn-primary"
            type=""
          >
            {showAddTodoForm ? "Close Form" : "New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addToDo={addToDo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
