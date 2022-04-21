import React, { useState, useRef } from "react";
import { FormControl, FilledInput, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputAdornment } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SendIcon from "@mui/icons-material/Send";
import { Image, Transformation } from "cloudinary-react";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: "70px",
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  uploadImageContainer: {
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  image: {
    margin: "10px",
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const inputFile = useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: uploadedImages ? imgUrl : "",
    };
    await postMessage(reqBody);
    setText("");
    setUploadedImages([]);
    setImgUrl([]);
  };

  const onFileChange = async (e) => {
    e.preventDefault();

    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDNAME}/image/upload/`;

    const form = e.currentTarget.files;
    const fileInput = Array.from(form);

    fileInput.forEach(async (uploadedFile) => {
      const formData = new FormData();
      formData.append("file", uploadedFile);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setUploadedImages((prev) => [...prev, data]);
      setImgUrl((prev) => [...prev, data.secure_url]);
    });
  };

  const uploadImage = async () => {
    await inputFile.current.click();
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <FormControl fullWidth hiddenLabel>
          {uploadedImages && (
            <Box className={classes.uploadImageContainer}>
              {uploadedImages.map((file) => (
                <Image
                  className={classes.image}
                  key={file.public_id}
                  cloudName={process.env.REACT_APP_CLOUDNAME}
                  publicId={file.public_id}
                >
                  <Transformation
                    height="150"
                    width="150"
                    crop="lfill"
                    radius="20"
                  />
                </Image>
              ))}
            </Box>
          )}
          <FilledInput
            classes={{ root: classes.input }}
            disableUnderline
            placeholder="Type something..."
            value={text}
            name="text"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={uploadImage}>
                  <AddPhotoAlternateOutlinedIcon />
                  <input
                    type="file"
                    name="file"
                    style={{ display: "none" }}
                    onChange={onFileChange}
                    ref={inputFile}
                    multiple
                  />
                </IconButton>
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          ></FilledInput>
        </FormControl>
      </form>
    </>
  );
};

export default Input;
