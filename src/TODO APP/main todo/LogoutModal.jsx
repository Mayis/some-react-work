import React from "react";
const style = {
  position: "fixed",
  zIndex: "2",
  top: "0",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default function LogoutModal({ logout, close }) {
  return (
    <div id="mainLogout" style={style}>
      <div>
        <h1>do you want to logout</h1>
        <span onClick={logout}>YES</span>
        <span onClick={close}>NO</span>
      </div>
    </div>
  );
}
