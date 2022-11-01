import Todo from "../todo/Todo";
import "./todoList.css";

export default function TodoList({ todos, removeTodo }) {
  const dataTodos = () => {
    if (todos.length > 0) {
      return todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>;
      });
    }else{
        return <p>There are no Todos!</p>
    }
  };
  return <div className="todoList-container">{dataTodos()}</div>;
}
