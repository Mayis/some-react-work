import React from "react";
import { useSelector } from "react-redux";
import Login from "./login form/Login";
import TodoApp from "./main todo/TodoApp";

export default function App() {
  const login = useSelector((state) => state.login);
  return login ? <TodoApp /> : <Login />;
}
