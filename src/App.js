import {initialTodos} from "./constants";
import TodoList from "./TodoList";
import {useState} from "react";
import TodoAdd from "./TodoAdd";

function App() {
  
  const [todos, setTodos] = useState(initialTodos);
  
  const completeTodo = (key) => {
    const newTodos = [...todos];
    const deal = newTodos.find(item => key === item.key);
    if (deal) {
      deal.done = true;
      setTodos(newTodos);
    }
  };
  
  const addTodo = (newTodo) => {
    if (newTodo) {
      setTodos([...todos, newTodo])
    }
  };
  
  const removeTodo = (key) => {
    const newTodos = todos.filter(item => key !== item.key);
    setTodos(newTodos);
  };
  
  return (
    <div className="container">
      <nav className="navbar is-light">
        <ul className="navbar-brand px-2">
          <li className="navbar-item is-uppercase">
            react-todos-1
          </li>
        </ul>
      </nav>
      <main className="content px-6 py-6">
        <TodoList list={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
        <TodoAdd add={addTodo}/>
      </main>
    </div>
  );
}

export default App;
