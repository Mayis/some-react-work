import React from "react";

export default function TodoFooter({ todos, clearCompleted }) {
  console.log("render Footer");
  const completed = todos.filter((item) => item.isCompleted).length;
  return (
    <div id="todoFooter">
      <span>
        {completed}/{todos.length} completed
      </span>
      <button onClick={clearCompleted}>clear Competed</button>
    </div>
  );
}
