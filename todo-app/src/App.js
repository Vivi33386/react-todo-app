import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import { v4 as uuid } from 'uuid';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newTodo={
      id: uuid(),
      todoText: input,
      isCompleted:false
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const removeTodo = (id) => {
    const newTodoList= [...todos].filter((todo) => {
      return todo.id !== id;
    })
    setTodos(newTodoList);
   }

  return (
    <div className="App">
      <TodoForm
        id="todo-add"
        type="text"
        btnText="Add"
        value={input}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
