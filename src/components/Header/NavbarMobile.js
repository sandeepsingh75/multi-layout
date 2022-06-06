import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Box, Button, Tab, Tabs, Toolbar } from "@mui/material";
import { Image } from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import polygon from '../../images/Polygon-3.png'
import { styled } from "@mui/material/styles";
import { HeaderMenus } from "../Helpers/Describe";

// const usestyles = createTheme((theme) => ({
const RightOption = styled('Box')(({theme})=>({
    marginLeft:'15rem',
    [theme.breakpoints.up('md')]:{
        display:'flex',
        marginLeft:'8rem',
    },
    [theme.breakpoints.up('sm')]:{
      display: 'flex',  
      paddingLeft:'0rem',
    },
    [theme.breakpoints.down('sm')]:{
      display: 'flex',  
      marginLeft:'1rem',
    }
}))

const Coral  = styled(Tab)(({theme})=>({
    [theme.breakpoints.up('md')]:{
        marginLeft: '12rem',
    }
}))


const NavbarMobile = () => {



    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <Box>
      <Toolbar>
        <Tabs>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{marginLeft:0, color:'black'}} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

          {
              HeaderMenus.map((menus) => (
                <MenuItem onClick={handleClose} > {menus.menu} </MenuItem>      
              ))
          }
      </Menu>

          <Box> 
          {/* <img src={polygon} style={{height:'1rem', width:'1rem', position:'absolute', left:'370px', top:'18px'}}/>
              <img src={polygon} style={{height:'1rem', width:'1rem', position:'absolute', left:'365px', top:'18px'}}/>
              <img src={polygon} style={{height:'1rem', width:'1rem', position:'absolute', left:'360px', top:'18px'}}/> */}
            <Coral
              sx={{
                marginLeft: "20rem",
                color: "black",
                marginRight: "7rem",
                fontSize: "1.5rem",
              }}
            label="CORAL"
          />
          {/* <img src={polygon} style={{height:'1rem', width:'1rem',position:'absolute', left:'495px', top:'18px'}}/>
          <img src={polygon} style={{height:'1rem', width:'1rem',position:'absolute', left:'500px', top:'18px'}}/>
          <img src={polygon} style={{height:'1rem', width:'1rem',position:'absolute', left:'505px', top:'18px'}}/> */}
          </Box>

        </Tabs>
       <RightOption >
       <Button sx={{ color: "black" }} variant="text">
          <PersonIcon /> Account
        </Button>
        <Button sx={{ color: "black", marginRight: "0" }} variant="text">
          <ShoppingBagIcon /> Shopping
        </Button>
       </RightOption>
      </Toolbar>
    </Box>
  );
};

export default NavbarMobile;
