import { Link } from "react-router-dom";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../images/bg-img.png";
import bubble from "../images/bubble.svg";

const LoginSignup = (props) => {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      margin: 0,
    },
    sidebarBgImage: {
      width: "71%",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      repeat: "no-repeat",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    overlayStyle: {
      backgroundColor: "rgba(58,141,255,.8)",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    sidebarContainer: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      width: "270px",
      height: "186px",
      top: "28%",
    },
    chatBubble: {
      backgroundImage: `url(${bubble})`,
      backgroundSize: "cover",
      height: "67px",
      width: "67px",
      marginBottom: "20px",
      margin: "0 auto",
    },
    sidebarText: {
      color: "white",
      fontSize: "26px",
      lineHeight: "40px",
      textAlign: "center",
    },
    topContainer: {
      position: "absolute",
      right: "4%",
      top: "4%",
      display: "flex",
      width: "68%",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    linkStyle: {
      textDecoration: "none",
      marginLeft: "20px",
    },
    topBtn: {
      boxShadow: "0px 4px 4px rgba(88, 133, 196, 0.15)",
      width: "170px",
    },
    content: {
      position: "relative",
    },
    formContent: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      justifyContent: "center",
    },
    topText: {
      fontSize: "14px",
      lineHeight: "19.07px",
    },
    formStyle: {
      position: "absolute",
      right: "12%",
      top: "24%",
      width: "74%",
      height: "51%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    formTitle: {
      fontWeight: "600",
      fontSize: "1.8rem",
      fontFamily: "Open Sans, semi-bold",
    },
    bottomBtn: {
      width: "160px",
      height: "56px",
    },
  }));

  const classes = useStyles();
  const matches = useMediaQuery("(min-width:700px)");

  return (
    <Box className={classes.root}>
      {matches && (
        <Box alt="Chat picture" className={classes.sidebarBgImage}>
          <Box className={classes.overlayStyle}></Box>
          <Box className={classes.sidebarContainer}>
            <Box className={classes.chatBubble}></Box>
            <Box className={classes.sidebarText}>
              Converse with anyone with any language
            </Box>
          </Box>
        </Box>
      )}
      <Grid container className={classes.content}>
        <Box className={classes.formContent}>
          <Grid container item className={classes.topContainer}>
            <Typography className={classes.topText} color="secondary">
              {props.topText}
            </Typography>
            <Link
              to={{ pathname: props.topBtnLink }}
              className={classes.linkStyle}
            >
              <Button color="primary" className={classes.topBtn}>
                {props.topBtnText}
              </Button>
            </Link>
          </Grid>
          <form onSubmit={props.handleSubmit}>
            <Grid className={classes.formStyle}>
              <Typography variant="h4" className={classes.formTitle}>
                {props.formTitleText}
              </Typography>
              {props.children}
              <Grid container justifyContent="center">
                <Button
                  className={classes.bottomBtn}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {props.bottomBtnText}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default LoginSignup;
