import React from 'react';
import Dialog from '@material-ui/core/Dialog';

function CustomDialog(props) {
  const { open = false, onClose = () => {}, customStyle = {}, dialogContent = "ADD TASK" } = props;

  return (
    <Dialog open={open} onClose={onClose} style={customStyle}>
      {dialogContent}
    </Dialog>
  );
}

export default CustomDialog;