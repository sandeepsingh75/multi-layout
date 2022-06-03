import React from "react";
import {  Toolbar, Tabs, Tab, Button,  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Header(props) {
    return (
        <React.Fragment>
                  {/* <AppBar sx={{background: '#F1F1F1'}}> */}
        <Toolbar sx={{background: '#F1F1F1'}}>
          <Tabs>
           <Button sx={{}}>   <SearchIcon sx={{color:'black'}} /></Button>

           
            <Tab sx={{ color:'black' ,marginLeft: "28rem", marginRight:'6rem' ,fontSize: "1.5rem"}} label="CORAL" className="" />
            
          </Tabs>
        <Button sx={{color:'black' , marginLeft:'20rem'}} variant="text" ><PersonIcon/> Account</Button>
        <Button sx={{color:'black', marginRight:"0"}} variant="text"><ShoppingBagIcon /> Shopping</Button>
        
       
        </Toolbar>
       </React.Fragment>

    );
}

export default Header;