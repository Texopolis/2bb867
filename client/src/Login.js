import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FormControl, TextField } from "@material-ui/core";
import LoginSignup from "./components/LoginSignup.js";

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <LoginSignup
      topText="Don't have an account?"
      topBtnText="Create account"
      topBtnLink="/register"
      formTitleText="Welcome back!"
      bottomBtnText="Login"
      handleSubmit={handleLogin}
    >
      <FormControl fullWidth margin="normal" required>
        <TextField
          aria-label="username"
          label="Username"
          name="username"
          type="text"
        />
      </FormControl>

      <FormControl fullWidth margin="normal" required>
        <TextField
          label="password"
          aria-label="password"
          type="password"
          name="password"
        />
      </FormControl>
    </LoginSignup>
  );
};

export default Login;
