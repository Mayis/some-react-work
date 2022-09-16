import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { useDispatch, useSelector } from "react-redux";
import LogoutModal from "./LogoutModal";

export default function App() {
  const todos = useSelector((state) => state.todos);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const addTodo = (text) => {
    dispatch({
      type: "ADD",
      payload: {
        text: text,
      },
    });
  };
  const clearCompleted = () => {
    dispatch({
      type: "CLEAR",
    });
  };
  const changeItem = (newItem) => {
    dispatch({
      type: "CHANGE",
      payload: {
        newItem: newItem,
      },
    });
  };
  const onDelete = (delItem) => {
    dispatch({
      type: "DELETE",
      payload: {
        id: delItem.id,
      },
    });
  };
  const onLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  const openModal = () => {
    dispatch({
      type: "OPEN-MODAL",
    });
  };
  const closeModal = () => {
    dispatch({
      type: "CLOSE-MODAL",
    });
  };
  return (
    <>
      <div id="todos">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} changeItem={changeItem} onDelete={onDelete} />
        <TodoFooter todos={todos} clearCompleted={clearCompleted} />
      </div>
      <div onClick={openModal}>LOGOUT</div>
      {modal && <LogoutModal logout={onLogout} close={closeModal} />}
    </>
  );
}
