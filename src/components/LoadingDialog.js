import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { TextField } from '@material-ui/core';

const backendURL = `http://localhost:8000`
const abstractionURL = `${backendURL}/execute/`

const parseHTTPResponse = response => response.json() 

export default function LoadingDialog({ setAbstraction, abstraction }) {
  const [ open , setOpen ] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        <AddCircleIcon edge="end"/>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create A New Abstraction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Abstraction is being generated, please wait...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClose}
          > Cancel </Button>
          <Button
            color="primary" 
            variant="contained"
            onClick={handleSubmit}
          > Create </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}