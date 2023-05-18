import React  from "react";
import Button from "@mui/material/Button";

const ButtonComponent = (props) => {
  
  const {buttonColor="red", buttonText="Submit", actionOnClick = () => {}} = props;
  
  const buttonStyle = {
    backgroundColor: buttonColor,
  };

  return (
    <div>
        <Button variant="contained" onClick={actionOnClick} style={buttonStyle}> {buttonText} </Button>
    </div>
  );
}

export default ButtonComponent;