import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action";
import "./css/loginstyle.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {};
    for (const info of formData.entries()) {
      const [key, value] = info;
      userData[key] = value;
    }
    dispatch(login(userData));
    navigate("/");
  };

  return (
    <div className="loginPage">
      <form onSubmit={handleFormSubmit} id="form">
        <label>
          Email
          <input type="text" name="email" required />
        </label>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required minLength={8} />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
