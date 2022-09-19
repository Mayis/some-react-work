import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import "./styles/style.css";

export default function MainTodo() {
  return (
    <div id="fullContainer">
      <div id="formDiv">
        <TodoForm />
      </div>
      <div id="mainTodos">
        <Todos />
        <TodoFooter />
      </div>
    </div>
  );
}
