import React from "react";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const dispatch = useDispatch();
  const formSubmit = (e) => {
    e.preventDefault();
    const todo = new FormData(e.target).get("todo");
    const context = new FormData(e.target).get("tododesk");
    e.target.reset();

    dispatch({
      type: "ADD",
      payload: {
        todo,
        context,
      },
    });
  };
  return (
    <form id="todoform" onSubmit={formSubmit}>
      <input type="text" name="todo" placeholder="todo title" />
      <textarea name="tododesk" rows={5} placeholder="todo context" />
      <button type="submit"> ADD TODO</button>
    </form>
  );
}
