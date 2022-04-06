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
import bgImage from "./images/bg-img.png";
import bubble from "./images/bubble.svg";

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
    <Box sx={{ display: "flex" }}>
      <Box
        className="bgImage"
        alt="Chat picture"
        sx={{
          height: "100vh",
          width: "75%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          position: "relative"
        }}
      >
        <div
          className="overlay"
          style={{
            backgroundColor: "rgba(58,141,255,.8)",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        ></div>
        <div
          className="leftContainer"
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            width: "75%",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="chatBubble"
            style={{
              backgroundImage: `url(${bubble})`,
              backgroundSize: "cover",
              height: "70px",
              width: "70px",
              marginBottom: "20px",
              margin: "0 auto",
            }}
          ></div>
          <div
            className="tagText"
            style={{
              color: "white",
              fontSize: "2em",
              marginTop: "40px",
            }}
          >
            Converse with anyone with any language
          </div>
        </div>
      </Box>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Box
          sx={{
            width: "65%",
            minHeight: "80vh",
            flexDirection: "column",
            p: "20px",
          }}
        >
          <Grid
            container
            item
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "right",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Typography color="secondary">Already have an account?</Typography>
            <Link
              href="/login"
              to="/login"
              style={{ textDecoration: "none", marginLeft: "20px" }}
            >
              <Button
                color="primary"
                style={{ boxShadow: "0px 4px 4px 0px #B0B0B0", width: "100px" }}
              >
                Login
              </Button>
            </Link>
          </Grid>
          <form onSubmit={handleRegister}>
            <Grid
              style={{
                height: "400px",
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" style={{ fontWeight: "bolder" }}>
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
                  style={{ width: "150px" }}
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
