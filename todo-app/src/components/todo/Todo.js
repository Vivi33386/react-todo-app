import "./todo.css";

export default function Todo({todo, removeTodo}) {
  return (
    <div>
    <div>{todo.todoText} </div>
    <button>Edit</button>
    <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  )
}
