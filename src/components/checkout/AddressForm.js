//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import axios from 'axios';

const theme = createTheme({
  typography: {
      allVariants: {
          fontSize: 16,
      },
  },

});

export default function AddressForm() {


  // function handleFormControl() {
    

  // };
  const handleFormControl = (event) => {
    event.preventDefault();
   const addressObj =  {
      firstName:document.getElementById("firstName").value, 
      lastName:document.getElementById("lastName").value,
      address:document.getElementById("address1").value, 
      city:document.getElementById("city").value, 
      province:document.getElementById("state").value, 
      zipcode:document.getElementById("zip").value, 
      country:document.getElementById("country").value 
    }
    
    axios.post(`http://localhost:4000/api/checkout/setData`,addressObj).then(res => {
      console.log(res.data)
     });
    // eslint-disable-next-line no-console
    
    // const formdata = {
    //   firstName : data.get('firstName'),
    //   lastName : data.get('lastName'),
      
    // };
  //   axios.post(`http://localhost:4000/api/person/setData`,signupdata).then(res => {
  //  console.log(res.data)
  //  } ); 
  };



  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={16} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={16} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={16}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={16}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={16} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={16} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={16} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={16} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={16}>
        </Grid>
      </Grid>
 
    </React.Fragment>
  );
}