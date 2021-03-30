import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
// import { EventNoteTwoTone } from '@material-ui/icons';

const backendURL = `http://localhost:8000`
const abstractionURL = `${backendURL}/execute/`

const parseHTTPResponse = response => response.json() 

export default function CreateAbstraction({ setAbstraction, abstraction }) {

  const [ legalDescription , setLegalDescription ] = useState('')
  const [ clientInformation , setClientInformation ] = useState('')
  const [ countyInformation , setCountyInformation ] = useState('')
  const [ uploadFile, setUploadFile ] = useState({})

  const handleClear = event => {
    event.preventDefault()
    setClientInformation('')
    setLegalDescription('')
    setCountyInformation('')
    setUploadFile('')
  }

  const handleSubmit = event => {
      event.preventDefault()
      const newAbstraction = { abstraction: { clientInformation , legalDescription, uploadFile } }

      console.log(newAbstraction)
  
      fetch( abstractionURL, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.token}`,
            },
          body: JSON.stringify( newAbstraction ),
          // credentials: 'include'
      })
          .then( parseHTTPResponse )
          .then( console.log )
          // .then( newAbstraction => setAbstraction([ ...abstraction, setAbstraction ])) 

      // console.log(abstraction)
      setClientInformation('')
      setLegalDescription('')
      setCountyInformation('')
      setUploadFile('')
  }

  return (
    <>
        <form className="submit-abstraction">
              <Typography variant="h6" id="form-title">Create A New Abstraction</Typography>
              <Typography variant="subtitle2">Please fill out the form below</Typography>
              <div className="form-inputs">
                <div>
                    <TextField
                        id="client-information"
                        name="client-information"
                        label="Client Information"
                        shrink={true}
                        margin="normal"
                        value={clientInformation}
                        className="form-input"
                        onChange={ event => setClientInformation( event.target.value )}
                    />
                </div>
                <div>
                    <TextField
                        id="legal-description"
                        name="legal-description"
                        label="Legal Description"
                        margin="normal"
                        shrink={true}
                        value={legalDescription}
                        className="form-input"
                        onChange={ event => setLegalDescription( event.target.value )}
                    />
                </div>
                <FormControl className="form-input">
                  <InputLabel id="demo-simple-select-helper-label">County</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="county-selector"
                    margin="normal"
                    value={countyInformation}
                    onChange={ event => setCountyInformation( event.target.value )}
                  >
                    <MenuItem value={10}>Adams County, Colorado</MenuItem>
                    <MenuItem value={20}>Arapahoe County, Colorado</MenuItem>
                    <MenuItem value={30}>Boulder County, Colorado</MenuItem>
                    <MenuItem value={40}>Broomfield County, Colorado</MenuItem>
                    <MenuItem value={50}>Denver County, Colorado</MenuItem>
                    <MenuItem value={60}>Garfield County, Colorado</MenuItem>
                    <MenuItem value={70}>Weld County, Colorado</MenuItem>
                  </Select>
                  <FormHelperText>Select the county you would like to search</FormHelperText>
                </FormControl>
                <div>
                    <Button
                        color="secondary"
                        variant="contained"
                        component="label"
                        className="upload-button"
                        onChange={ event => setUploadFile( event.target.value )}
                        >
                        Upload File
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                    <div>
                      <Button
                        color="primary"
                        variant="contained"
                        className="execute-form-button"
                        onClick={handleClear}
                      > Cancel </Button>
                      <Button
                        color="primary" 
                        variant="contained"
                        onClick={handleSubmit}
                        className="execute-form-button"
                      > Create </Button>
                    </div>
                </div>
              </div>
          </form>
    </>
  );
}