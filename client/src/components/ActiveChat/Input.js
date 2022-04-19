import React, { useState, useRef } from "react";
import { FormControl, FilledInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputAdornment } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Image } from "cloudinary-react";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imgUrl, setImgUrl]= useState([]);
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
      attachments: uploadedImages ? imgUrl : null,
    };
    await postMessage(reqBody);
    setText("");
    setUploadedImages([]);
    setImgUrl([]);
  };

  const onFileChange = async(e) => {
    e.preventDefault();

    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDNAME}/image/upload/`;

    const form = e.currentTarget.files;
    const fileInput = Array.from(form);

    fileInput.forEach(async (uploadedFile)=>{
      const formData = new FormData();
      formData.append("file", uploadedFile);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)

      const res = await fetch(url,{
        method: "POST",
        body:formData,
      });
      const data = await res.json();
      setUploadedImages(prev=>[...prev, data]);
      setImgUrl(prev=>[...prev, data.secure_url]);
    })
  };

  const uploadImage = async () => {
    await inputFile.current.click();
  };

// console.log(uploadedImages)
// console.log(imgUrl)

  return (
    <>
    <form className={classes.root} onSubmit={handleSubmit}>
      
      <FormControl fullWidth hiddenLabel>
      <div>
        {uploadedImages && 
        uploadedImages.map((file)=>
        <Image
          key={file.public_id}
          cloudName={process.env.REACT_APP_CLOUDNAME}
          publicId={file.public_id}
          width="100"
          crop="scale"
        />)}

    </div>
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
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
    
    </>
  );
};

export default Input;
