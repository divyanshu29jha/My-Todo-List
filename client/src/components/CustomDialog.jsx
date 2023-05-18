import React from 'react';
import Dialog from '@material-ui/core/Dialog';

function CustomDialog(props) {
  const { open, onClose, customStyle } = props;

  return (
    <Dialog open={open} onClose={onClose} style={customStyle}>
      {"add task"}
    </Dialog>
  );
}

export default CustomDialog;