import React from 'react';
import Button from '@material-ui/core/Button';

function CustomButton(props) {
    let{color="blue",text="submit",onClickAction=()=>{console.log("submitted")}}=props
  const handleClick = () => {
    if (typeof onClickAction === 'function') {
     onClickAction();
    }
  };

  return (
    <Button variant="contained" color={color} onClick={handleClick}>
      {text}
    </Button>
  );
}

export default CustomButton;