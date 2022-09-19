import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeChecked, deleteTodo, changeTodoContext } from "../redux/action";
import Modal from "./Modal";
import TodoContext from "./TodoContext";

export default function Todo({ item }) {
  const { todo, id, context, isCompleted } = item;
  const [accord, setAccord] = useState(false);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const changeCheck = (e) => {
    dispatch(changeChecked(id, e.target.checked));
  };
  const deleteItem = () => {
    dispatch(deleteTodo(id));
  };
  const openAcord = () => {
    setAccord(!accord);
  };
  const openChangeModal = (e) => {
    e.stopPropagation();
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const changeTextarea = (e) => {
    e.preventDefault();
    const context = new FormData(e.target).get("textarea");
    dispatch(changeTodoContext(id, context));
    setModal(false);
  };

  return (
    <>
      <div className="oneTodo" onClick={openAcord}>
        <div className="mainPart">
          <label htmlFor={`checkin${id}`}>
            <input
              type="checkbox"
              id={`checkin${id}`}
              checked={isCompleted}
              onChange={changeCheck}
            />
            {todo}
          </label>
          <button className="delBtn" onClick={deleteItem}>
            &#128465;
          </button>
          <span>{accord ? "-" : "+"}</span>
        </div>
        {accord && <TodoContext context={context} openFn={openChangeModal} />}
      </div>
      {modal && (
        <Modal
          context={context}
          closeFn={closeModal}
          changeFn={changeTextarea}
        />
      )}
    </>
  );
}
