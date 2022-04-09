import bgImage from "../images/bg-img.png";
import bubble from "../images/bubble.svg";

const overlayStyle = {
  backgroundColor: "rgba(58,141,255,.8)",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const sidebarBgImage = {
  height: "100vh",
  width: "65%",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  position: "relative",
};

const sidebarContainer = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  width: "75%",
  left: "50%",
  top: "40%",
  transform: "translate(-50%, -50%)",
};

const chatBubble = {
  backgroundImage: `url(${bubble})`,
  backgroundSize: "cover",
  height: "70px",
  width: "70px",
  marginBottom: "20px",
  margin: "0 auto",
};

const sidebarText = {
  color: "white",
  fontSize: "2em",
  marginTop: "40px",
};

const formContent = {
  width: "90%",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const topContainer = {
  position: "relative",
  display: "flex",
  width: "100%",
  justifyContent: "right",
  alignItems: "center",
  marginTop: "30px",
};

const linkStyle = {
  textDecoration: "none",
  marginLeft: "20px",
};

const topBtn = {
  boxShadow: "0px 4px 4px 0px #B0B0B0",
  width: "150px",
};

const formStyle = {
  marginTop: "125px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingLeft: "110px",
  paddingRight: "110px",
};

const bottomBtn = {
  width: "150px",
  marginTop: "50px",
};

const formTitle = {
  fontWeight: "bolder",
  lineHeight: "100px",
};

export {
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
};
