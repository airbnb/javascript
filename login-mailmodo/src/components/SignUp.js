import React from "react";
import "../index.css";

const SignUp = () => {
  return (
    <form className="register-box-container">
      <label htmlFor="username">UserName:</label>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" placeholder="Email" />
      <label htmlFor="phone">Phone Number:</label>
      <input type="number" name="phone" placeholder="Phone Number" />
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;
