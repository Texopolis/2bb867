import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import {
  Grid,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <LoginSignup
      topText="Already have an account?"
      topBtnText="Login"
      formTitleText="Create an account."
      bottomBtnText="Create"
      topBtnLink="/login"
      handleSubmit={handleRegister}
    >
      <FormControl fullWidth>
        <TextField
          aria-label="username"
          label="Username"
          name="username"
          type="text"
          required
        />
      </FormControl>

      <Grid>
        <FormControl fullWidth>
          <TextField
            label="E-mail address"
            aria-label="e-mail address"
            type="email"
            name="email"
            required
          />
        </FormControl>
      </Grid>
      <Grid>
        <FormControl fullWidth error={!!formErrorMessage.confirmPassword}>
          <TextField
            aria-label="password"
            label="Password"
            type="password"
            inputProps={{ minLength: 6 }}
            name="password"
            required
          />
          <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid>
        <FormControl fullWidth error={!!formErrorMessage.confirmPassword}>
          <TextField
            label="Confirm Password"
            aria-label="confirm password"
            type="password"
            inputProps={{ minLength: 6 }}
            name="confirmPassword"
            required
          />
          <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
        </FormControl>
      </Grid>
    </LoginSignup>
  );
};

export default Signup;
