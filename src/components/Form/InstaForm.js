import { Grid, TextField, Button, Box } from '@mui/material';
import React from 'react';
import {styled} from '@mui/material/styles';

const InputField = styled(Box)(({theme})=>({
    padding: '2.5rem 18rem',
    [theme.breakpoints.down('lg')]:{
      padding: '2.5rem 10rem',
    },
    [theme.breakpoints.down('md')]: {
      padding: '2.5rem 5rem',
    },
  }));

function InstaForm(props) {
    return (
        <React.Fragment>
            <Grid container style={{margin:'auto'}}>
            {/* <Grid item lg={2}></Grid> */}
              <Grid item lg={12}  md={12} sm={12} >
             <InputField  sx={{ padding: '2.5rem 18rem' }}>
             <TextField label="Email Address" variant="filled" color="success" focused  sx={{width:'24rem' }}/>  
              <Button variant="contained">Submit</Button>
               </InputField>          
              </Grid>
              {/* <Grid item lg={1}></Grid> */}
              {/* <Grid item lg={2}></Grid> */}
          </Grid>
        </React.Fragment>
    );
}

export default InstaForm;