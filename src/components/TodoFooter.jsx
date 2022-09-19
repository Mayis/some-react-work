import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDone } from "../redux/action";

export default function TodoFooter() {
  const todos = useSelector((state) => state.todos);
  const completed = todos.filter((todo) => todo.isCompleted).length;
  const dispatch = useDispatch();
  const clearCompleted = () => {
    dispatch(clearDone());
  };
  return (
    <div className="todoFooter">
      <span>
        {completed}/{todos.length}
      </span>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}
