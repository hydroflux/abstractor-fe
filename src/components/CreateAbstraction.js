import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { TextField } from '@material-ui/core';

const backendURL = `http://localhost:3000`
const abstractionURL = `${backendURL}/abstractions`

const parseHTTPResponse = response => response.json() 

export default function CreateAbstraction({ setAbstraction, abstraction }) {
  const [ open , setOpen ] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [ clientInformation , setClientInformation ] = useState('')
  const [ legalDescription , setLegalDescription ] = useState('')
  const [ uploadFile, setUploadFile ] = useState({})

  const handleSubmit = event => {
      event.preventDefault()
      const newAbstraction = { abstraction: { clientInformation , legalDescription, uploadFile } }

      console.log(newAbstraction)

      // fetch( abstractionURL, {
      //     method: 'POST',
      //     headers: {
      //         Accept: 'application/json',
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify( newAbstraction )
      // })
      //     .then( parseHTTPResponse )
      //     .then( newAbstraction => setAbstraction([ ...abstraction, setAbstraction ])) 

      setClientInformation('')
      setLegalDescription('')
      setUploadFile('')
  }

  return (
    <>
      <Button variant="fab" color="primary" onClick={handleClickOpen}>
        <AddCircleIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create A New Abstraction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below.
          </DialogContentText>
          <form className="submit-abstraction">
                <div>
                    <TextField
                        id="client-information"
                        name="client-information"
                        label="Client Information"
                        margin="normal"
                        onChange={ event => setClientInformation( event.target.value )}
                    />
                </div>
                <div>
                    <TextField
                        id="legal-description"
                        name="legal-description"
                        label="Legal Description"
                        onChange={ event => setLegalDescription( event.target.value )}
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        component="label"
                        onChange={ event => setUploadFile( event.target.value )}
                        >
                        Upload File
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                </div>
            </form>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="raised"
            onClick={handleClose}
          > Cancel </Button>
          <Button
            color="primary" 
            variant="raised"
            onClick={handleSubmit}
          > Create </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}