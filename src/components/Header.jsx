import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action";
import "./styles/style.css";
export default function Header() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const logoutFn = () => {
    dispatch(logout);
  };
  return (
    <div id="header">
      <div className="headerName">{username}</div>
      <div className="logDiv">
        <button className="logoutBtn" onClick={logoutFn}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}
