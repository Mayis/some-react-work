import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, changeItem, onDelete }) {
  console.log("render list");
  return (
    <div id="mainTodos">
      {todos?.map((item, i) => (
        <TodoItem
          key={item.id}
          item={item}
          changeItem={changeItem}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
