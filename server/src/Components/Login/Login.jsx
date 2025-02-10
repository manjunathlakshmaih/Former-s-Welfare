// Login.js
import "./Login.css";
import { useState } from "react";
import Input from "../Input/Input";

const Login = () => {
  const [inputValue, setInputValue] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email) ? "" : "Invalid email format";
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <Input
        label="Email"
        id="email"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your email"
        type="email"
        validate={validateEmail}
      />
      <Input
        label="Password"
        id="password"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your password"
        type="password"
      />
      <button>Login</button>
    </div>
  );
};

export default Login;
