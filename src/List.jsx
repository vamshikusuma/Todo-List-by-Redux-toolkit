import { useDispatch } from "react-redux";
import { deletetodo, editTodo } from "./Store";
import { useState } from "react";
import "./index.css";

export default function List({ id, todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState(todo);

  const dispatch = useDispatch();

  const handleSave = () => {
    if (title.trim() === "") {
      alert("Todo title cannot be empty.");
      return;
    }
    dispatch(editTodo({ id, title }));
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div>
          <input
            type="text"
            className={`rounded-md font-semibold text-2xl ${isEditing ? "text-red-500" : ""}`}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            aria-label="Edit Todo Title"
          />
          &nbsp;
          <button
            className="bg-blue-600 text-white font-semibold rounded-md p-2 pl-4 pr-4"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <li
            className={`font-semibold text-xl list-none flex items-center space-x-4 p-2 rounded-md ${
              isChecked ? "bg-red-500 text-white" : "bg-white text-black"
            }`}
          >
            <input
              type="checkbox"
              aria-label="Mark Todo as Completed"
              className="w-5 h-5 accent-blue-600 cursor-pointer"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span>{todo}</span>
          </li>
          <button
            className="bg-blue-600 text-white font-semibold rounded-md p-2 pl-5 pr-5 m-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          &nbsp;
          <button
            className="bg-blue-600 text-white font-semibold rounded-md p-2 pl-4 pr-4"
            onClick={() => dispatch(deletetodo(id))}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}
