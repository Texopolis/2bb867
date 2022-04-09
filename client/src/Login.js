import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
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
            <Typography color="secondary">Don't have an account?</Typography>
            <Link href="/register" to="/register" style={linkStyle}>
              <Button color="primary" style={topBtn}>
                Create account
              </Button>
            </Link>
          </Grid>
          <form onSubmit={handleLogin} style={{ lineHeight: "100px" }}>
            <Grid style={formStyle}>
              <Typography variant="h4" style={formTitle}>
                Welcome back!
              </Typography>
              <Grid>
                <FormControl fullWidth margin="normal" required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl fullWidth margin="normal" required>
                <TextField
                  label="password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
              <Grid container justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  style={bottomBtn}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
