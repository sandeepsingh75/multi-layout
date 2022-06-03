import React from "react";
import { Card, CardContent,  Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function Login(props) {
  return (
   
   <div>
     <Card sx={{maxWidth: '30rem', margin: '5rem auto'}}>
       <CardContent>
         <Grid container spacing={1}>
            <Grid xs={12} sm={12} md={12} lg={12} item>
                <TextField label='Email' type='email' placeholder="Enter Your Email" variant="outlined" fullWidth />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} item>
                <TextField label='Password' placeholder="Enter Your Password" variant="outlined" fullWidth />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} item>
              <Button variant="contained" color='primary' fullWidth> Submit</Button>
            </Grid>
         </Grid>
       </CardContent>
     </Card>
   </div>
  );
}

export default Login;
