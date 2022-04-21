import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  image: {
    width: "175px",
    borderRadius: "15px",
    margin: "5px",
  },
}));

function ImageMessage(props) {
  const classes = useStyles();

  return (
    <>
      <img src={props.url} className={classes.image} alt="img message" />
    </>
  );
}

export default ImageMessage;
