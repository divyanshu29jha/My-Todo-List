import React from 'react';
import Button from '@material-ui/core/Button';

function CustomButton(props) {
    let{color="blue",text="submit",variant="contained",onClickAction=()=>{}}=props
  const handleClick = () => {
    if (typeof onClickAction === 'function') {
     onClickAction();
    }
  };

  return (
    <Button variant={variant} color={color} onClick={handleClick}>
      {text}
    </Button>
  );
}

export default CustomButton;