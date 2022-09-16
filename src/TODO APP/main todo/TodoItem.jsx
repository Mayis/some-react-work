import React from "react";

export default function TodoItem({ item, changeItem, onDelete }) {
  const onCheck = (e) => {
    changeItem({
      ...item,
      isCompleted: e.target.checked,
    });
  };

  const delItem = () => {
    onDelete(item);
  };
  console.log("render item");
  return (
    <div className="todoItem">
      <label htmlFor={`item${item.id}`}>
        <input
          type="checkbox"
          id={`item${item.id}`}
          checked={item.isCompleted}
          onChange={onCheck}
        />
        {item.text}
        <button onClick={delItem}>X</button>
      </label>
    </div>
  );
}
