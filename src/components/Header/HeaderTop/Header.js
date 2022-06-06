import React from "react";
import {  Toolbar, Tabs, Tab, Button, Grid,  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Header(props) {
    return (
        <React.Fragment>
        <Toolbar sx={{background: '#F1F1F1'}}>
         
        <Grid container>
          <Grid item lg={2}>
          <SearchIcon sx={{color:'black'}} />
          </Grid>
          <Grid item lg={5} md={3}>
          <Button style={{color:'black', margin:'auto', fontSize: "1.5rem"}}>CORAL</Button>
          </Grid>
          <Grid item lg={1} md={1} sm={2}>
          <Button sx={{color:'black' }} variant="text" ><PersonIcon/> Account</Button>
          </Grid>
          <Grid item lg={1} md={2} sm={2}>
          <Button sx={{color:'black', marginRight:"0"}} variant="text"><ShoppingBagIcon /> Shopping</Button>
          </Grid>
        </Grid>
       
        </Toolbar>
       </React.Fragment>

    );
}

export default Header;