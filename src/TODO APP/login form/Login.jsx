import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
      payload: {
        name: name,
      },
    });
  };
  return (
    <div id="loginForm">
      <form onSubmit={submitLogin}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button>LOGIN</button>
      </form>
    </div>
  );
}
