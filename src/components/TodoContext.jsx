import React from "react";
import "./styles/style.css";
export default function TodoContext({ context, openFn }) {
  return (
    <div className="contextDiv">
      <p>{context}</p>
      <button onClick={openFn}>change Context</button>
    </div>
  );
}
