import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import ImgMessage from "./ImageMessage";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    width: "fit-content",
  },
  imgMessageContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();
  const generateKey = (attachment) => {
    return `${attachment}_${time}`;
  };
  const timeBubble = <Typography className={classes.date}>{time}</Typography>;

  const textBubble = text && (
    <Box className={classes.bubble}>
      <Typography className={classes.text}>{text}</Typography>
    </Box>
  );
  const imgBubble = (
    <Box className={classes.imgMessageContainer}>
      {attachments &&
        attachments.map((img) => {
          return <ImgMessage key={generateKey(img)} url={img} />;
        })}
    </Box>
  );

  return (
    <Box className={classes.root}>
      {attachments && attachments.length > 1 ? (
        <>
          {textBubble}
          {imgBubble}
          {timeBubble}
        </>
      ) : (
        <>
          {timeBubble}
          {imgBubble}
          {textBubble}
        </>
      )}
    </Box>
  );
};

export default SenderBubble;
