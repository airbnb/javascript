import React from "react";
import "../index.css";
const SignIn = () => {
  return (
    <form className="login-box-container">
      <label htmlFor="username">UserName:</label>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" placeholder="Password" />
      <button type="primary">Login</button>
    </form>
  );
};

export default SignIn;
