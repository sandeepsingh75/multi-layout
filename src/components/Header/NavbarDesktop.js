import React from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab, Button, makeStyles, createTheme, Divider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import polygon from '../../images/Polygon-3.png'
import { Image } from "@mui/icons-material";

const NavbarDesktop = () => {
  return (
    <React.Fragment>
      <AppBar sx={{background: '#F1F1F1'}}>
        <Toolbar>
          <Tabs>
           <Button sx={{}}>   <SearchIcon sx={{color:'black'}} /></Button>

            <img src={polygon} style={{height:'1rem', width:'1rem', position:'absolute', left:'507px', top:'18px'}}/>
            <img src={polygon} style={{height:'1rem', width:'1rem', position:'absolute', left:'501px', top:'18px'}}/>
            <img src={polygon} style={{height:'1rem', width:'1rem', position:'absolute', left:'496px', top:'18px'}}/>
            <Tab sx={{marginLeft:'2rem', color:'black' ,marginLeft: "28rem", marginRight:'6rem' ,fontSize: "1.5rem"}} label="CORAL" className="" />
            <img src={polygon} style={{height:'1rem', width:'1rem', position:'absolute', left:'620px', top:'18px'}}/>
            <img src={polygon} style={{height:'1rem', width:'1rem', position:'absolute', left:'625px', top:'18px'}}/>
            <img src={polygon} style={{height:'1rem', width:'1rem', position:'absolute', left:'630px', top:'18px'}}/>
          </Tabs>
        <Button sx={{color:'black' , marginLeft:'20rem'}} variant="text" ><PersonIcon/> Account</Button>
        <Button sx={{color:'black', marginRight:"0"}} variant="text"><ShoppingBagIcon /> Shopping</Button>
        
        </Toolbar>
        <Divider />
        <Toolbar>
          {/* <Typography>Shope</Typography> */}
          <Tabs  >
            <Tab sx={{color:'#000000'}} label="Jwellery & Accessories" />
            <Tab  sx={{color:'#000000'}} label=" Clothing & Shoes" />
            <Tab  sx={{color:'#000000'}} label=" Home & Living" />
            <Tab  sx={{color:'#000000'}} label=" Wedding & Party" />
            <Tab  sx={{color:'#000000'}} label=" Toys & Entertainment" />
            <Tab  sx={{color:'#000000'}} label=" Art & Collectibles" />
            <Tab  sx={{color:'#000000'}} label="Craft Supplies & Tools" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavbarDesktop;

