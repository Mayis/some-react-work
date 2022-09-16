import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
  };
  const submitText = (e) => {
    e.preventDefault();
    text.length >= 1 && addTodo(text);
    setText("");
  };
  console.log("render form");
  return (
    <form onSubmit={submitText}>
      <input type="text" value={text} onChange={changeText} />
      <button>ADD</button>
    </form>
  );
}
