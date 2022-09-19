import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function Todos() {
  const todos = useSelector((state) => state.todos);

  console.log(todos);
  return (
    <div id="todos">
      {todos?.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  );
}
