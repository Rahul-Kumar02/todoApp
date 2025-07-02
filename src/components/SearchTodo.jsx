import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { setSearchQuery } from "../features/todo/todoSlice";
import { useTheme } from "../context/ThemeContext";
import { useDispatch } from "react-redux";

function SearchTodo() {
  const { theme, toggleTheme } = useTheme();

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearchTodo = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query.trim().toLocaleLowerCase()));
    setQuery("");
  };

  return (
    <header className="head bg-violet-600 h-[100px] w-[100%] sticky top-14 z-20">
      <nav className="flex justify-between px-2 items-center h-[100%]">
        <div>
          <FaUserTie className="text-white text-3xl border-2 p-1 rounded-2xl cursor-pointer" />
        </div>

        <form
          
          onSubmit={handleSearchTodo}
          className="w-[70%] flex justify-center items-center gap-1"
        >
          <input
          id='input'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search your todo..."
            className="w-[100%] bg-white border-0 text-black px-2 h-[30px] rounded text-[13px] "
          />
          <button
            type="submit"
            className="bg-white h-[30px] w-[100px] rounded cursor-pointer  text-black active:bg-violet-400 font-semibold text-[13px]"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-2 absolute top-0 right-4">
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoon className="text-1xl text-white" />
            ) : (
              <IoSunny className="text-1xl text-white " />
            )}
          </button>
        </div>
        <IoMenu className="text-white text-3xl cursor-pointer" />
      </nav>
    </header>
  );
}

export default SearchTodo;
