import React from "react";
import { useDispatch } from "react-redux";
import "./styles/style.css";
export default function Modal({ context, closeFn, changeFn }) {
  const dispatch = useDispatch();

  return (
    <div className="fullModal" onClick={closeFn}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={changeFn}>
          <label htmlFor="textarea">
            CHANGE
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="10"
              defaultValue={context}
            />
          </label>
          <button>change</button>
        </form>
      </div>
    </div>
  );
}
