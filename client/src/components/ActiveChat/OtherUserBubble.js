import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import ImgMessage from "./ImageMessage";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
    width: "fit-content",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
  },
  imgMessageContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  otherUserBubble: {
    display: "flex",
    flexDirection: "column",
  },
}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();
  const generateKey = (attachment) => {
    return `${attachment}_${time}`;
  };
  const timeBubble = (
    <Typography className={classes.usernameDate}>
      {otherUser.username} {time}
    </Typography>
  );
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
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box className={classes.otherUserBubble}>
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
    </Box>
  );
};

export default OtherUserBubble;
