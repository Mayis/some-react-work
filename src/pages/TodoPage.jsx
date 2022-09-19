import React from "react";
import MainTodo from "../components/MainTodo";
import Header from "../components/Header";
import withUser from "../components/hoc/onlyUser";
function TodoPage() {
  return (
    <>
      <Header />
      <MainTodo />
    </>
  );
}

export default withUser(TodoPage);
