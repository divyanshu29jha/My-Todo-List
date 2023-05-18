import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function CustomDialog(props) {
  const { open, onClose, onConfirm } = props;

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (typeof onConfirm === 'function') {
      onConfirm();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
      <DialogTitle id="dialog-title">Add new task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary" variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;