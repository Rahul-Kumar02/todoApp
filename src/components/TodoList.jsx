import React from "react";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const { todos, searchQuery } = useSelector((state) => state.todos);
  const filterTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery)
  );
  return filterTodos.length > 0 ? (
    <ul>
      {filterTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </ul>
  ) : (
    <p className="px-2 text-2xl para"> Todo is not exist !</p>
  );
}

export default TodoList;
