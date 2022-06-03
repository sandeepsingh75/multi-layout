import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { TextField } from "@mui/material";

import { Button } from "@mui/material";

function Register(props) {
  return (
   
   <div>
     <Card sx={{maxWidth: '30rem', margin: '5rem auto'}}>
       <CardContent>
         <Grid container spacing={1}>
            <Grid xs={12} sm={12} md={12} lg={12} item>
                <TextField label='Name' placeholder="Enter Your Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} item>
                <TextField label='Email' type='email' placeholder="Enter Your Email" variant="outlined" fullWidth required/>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} item>
                <TextField label='Password' type='password' placeholder="Enter Your Password" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} item>
                <TextField label='Phone No.' type='number' placeholder="Enter Your Phone Number" variant="outlined" fullWidth />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} item>
                <TextField label='Message' multiline rows={4} placeholder="Enter Message" variant="outlined" fullWidth />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} item>
               <Button variant="contained" color="primary" fullWidth>Submit</Button>
            </Grid>
         </Grid>
       </CardContent>
     </Card>
   </div>
  );
}

export default Register;
