import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const backendURL = `http://localhost:8000`
const abstractionURL = `${backendURL}/execute/`

const parseHTTPResponse = response => response.json() 

export default function CreateAbstraction({ setAbstraction, abstraction }) {

  const [ legalDescription , setLegalDescription ] = useState('')
  const [ clientInformation , setClientInformation ] = useState('')
  // const [ countyInformation , setCountyInformation ] = useState('') 
  const [ uploadFile, setUploadFile ] = useState({})

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
          credentials: 'include'
      })
          .then( parseHTTPResponse )
          .then( newAbstraction => setAbstraction([ ...abstraction, setAbstraction ])) 

      console.log(abstraction)
      setClientInformation('')
      setLegalDescription('')
      setUploadFile('')
  }

  return (
    <>
        <form className="submit-abstraction">
              <div>
                  <TextField
                      id="client-information"
                      name="client-information"
                      label="Client Information"
                      margin="normal"
                      className="text-input"
                      onChange={ event => setClientInformation( event.target.value )}
                  />
              </div>
              <div>
                  <TextField
                      id="legal-description"
                      name="legal-description"
                      label="Legal Description"
                      className="text-input"
                      onChange={ event => setLegalDescription( event.target.value )}
                  />
              </div>
              <div>
                  <TextField
                      id="county"
                      name="county"
                      label="County"
                      margin="normal"
                      className="text-input"
                      // onChange={ event => setCountyInformation( event.target.value )}
                  />
              </div>
              {/* <FormControl>
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  // value={age}
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
              </FormControl> */}
              <div>
                  <Button
                      color="secondary"
                      variant="contained"
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
                      // onClick={handleClose}
                    > Cancel </Button>
                    <Button
                      color="primary" 
                      variant="contained"
                      onClick={handleSubmit}
                      className="execute-form-button"
                    > Create </Button>
                  </div>
              </div>
          </form>
    </>
  );
}