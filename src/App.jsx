import "./App.css";
import AddTodo from "./components/AddTodo";
import SearchTodo from "./components/SearchTodo";
import TodoList from "./components/TodoList";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <div className="w-[100%] flex flex-col">
      <h1 className="heading bg-violet-600 text-4xl text-center text-white py-2 sticky top-0">
        Todo App
      </h1>
      <SearchTodo />
      <AddTodo />
      <TodoList />
    </div>
    </ThemeProvider>
  );
}

export default App;
