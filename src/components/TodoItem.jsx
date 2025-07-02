import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { IoMdSave } from "react-icons/io";

import { deleteTodo, editTodo, toggleTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (isEdit) dispatch(editTodo({ id: todo.id, newText: newText }));
    setIsEdit(false);
  };

  return (
    <div className="flex flex-col w-[100%] gap-2 px-2">
      <div className="list flex justify-between items-center bg-black text-white rounded my-2">
        <div className="flex items-center gap-2 px-2">
          <input
          autoComplete="off"
            name="inputField"
            onChange={() => dispatch(toggleTodo(todo.id))}
            type="checkbox"
            checked={todo.completed}
            className="w-[20px] h-[20px] "
          />
          {isEdit ? (
            <input
              className="border-2 px-2 rounded-lg bg-white text-black w-[100%]"
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          ) : (
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
          )}
        </div>

        <div className="cursor-pointer flex gap-5 justify-center items-center px-2 h-[40px] rounded">
          {isEdit ? (
            <IoMdSave
              onClick={handleSave}
              className="cursor-pointer text-green-500"
            />
          ) : (
            <RiEditFill
              onClick={() => setIsEdit(true)}
              className="text-1xl text-white hover:text-blue-500"
            />
          )}

          <MdDelete
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-1xl text-white hover:text-red-500"
          />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
