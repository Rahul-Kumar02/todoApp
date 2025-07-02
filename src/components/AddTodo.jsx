import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleFromSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form
      id="todo"
      name="todo"
      onSubmit={handleFromSubmit}
      className="w-[100%] flex gap-1 justify-center items-center sticky top-39 h-[100px] flex-col md:flex-row px-2 add-todo"
    >
      <input
      name="input"
      id="input"
      autoComplete="off"
      value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Add new todo"
        className="w-[100%] bg-black input text-white px-2 h-[40px] rounded "
      />
      <div className=" w-[100%] md:w-[90px]">
        <button
        type="submit"
        className="bg-violet-600  h-[40px] rounded cursor-pointer w-[90px] text-white transition-all duration-300 active:bg-violet-700 "
      >
        Add Todo
      </button>
      </div>
    </form>
  );
}

export default AddTodo;
