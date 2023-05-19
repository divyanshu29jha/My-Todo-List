import React from 'react';
import Dialog from '@material-ui/core/Dialog';

function CustomDialog(props) {
  const { open = false, onClose = () => {}, customStyle = {}, dialogContent = null } = props;

  return (
    <Dialog open={open} onClose={onClose} style={customStyle}>
      {dialogContent}
    </Dialog>
  );
}

export default CustomDialog;