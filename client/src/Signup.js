import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  overlayStyle,
  sidebarBgImage,
  sidebarContainer,
  chatBubble,
  sidebarText,
  linkStyle,
  formStyle,
  topBtn,
  bottomBtn,
  formTitle,
  topContainer,
  formContent,
} from "./loginSignupStyles/styles.js";

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

  const matches = useMediaQuery("(min-width:700px)");

  return (
    <Box style={{ display: "flex" }}>
      {matches && (
        <Box alt="Chat picture" style={sidebarBgImage}>
          <Box style={overlayStyle}></Box>
          <Box style={sidebarContainer}>
            <Box style={chatBubble}></Box>
            <Box style={sidebarText}>
              Converse with anyone with any language
            </Box>
          </Box>
        </Box>
      )}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Box style={formContent}>
          <Grid container item style={topContainer}>
            <Typography color="secondary">Already have an account?</Typography>
            <Link href="/login" to="/login" style={linkStyle}>
              <Button color="primary" style={topBtn}>
                Login
              </Button>
            </Link>
          </Grid>
          <form onSubmit={handleRegister} style={{ lineHeight: "100px" }}>
            <Grid style={formStyle}>
              <Typography variant="h4" style={formTitle}>
                Create an account.
              </Typography>
              <Grid>
                <FormControl fullWidth>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
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
                <FormControl
                  fullWidth
                  error={!!formErrorMessage.confirmPassword}
                >
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl
                  fullWidth
                  error={!!formErrorMessage.confirmPassword}
                >
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid container justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  style={bottomBtn}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Signup;
