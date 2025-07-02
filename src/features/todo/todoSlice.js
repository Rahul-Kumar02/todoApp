import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: 
  JSON.parse(localStorage.getItem("todos")) || [],
  searchQuery: "",
 
};


const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    addTodo: (state, action) => {
      const text = action.payload.trim();
      if (!text) {
        
        alert("Enter todo");
        return;
      }
      const isDuplicate = state.todos.some(
        (todo) => todo.text === text
      );
      if (isDuplicate) {
        alert("Todo already exists");
        return;
      }

      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    editTodo: (state, action) => {
      const {id, newText} = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText
        localStorage.setItem("todos", JSON.stringify(state.todos))
      }
    },


    

    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setSearchQuery: (state, action) => {
        state.searchQuery = action.payload
    }
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, toggleTodo, editTodo, setSearchQuery } =
todoSlice.actions;

