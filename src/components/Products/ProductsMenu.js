import { Box, Button } from '@mui/material';
import React from 'react';
import {styled} from '@mui/material/styles';

const ShowAll = styled(Button)(({theme})=>({
    marginLeft: "40rem",
    [theme.breakpoints.down('lg')]: {
      marginLeft:'41rem'
     },
    [theme.breakpoints.down('md')]: {
     marginLeft:'23rem'
     },
     [theme.breakpoints.down('sm')]: {
      marginLeft:'6rem',
     },
     [theme.breakpoints.down('480px')]: {
      marginLeft:'0rem'
     }
  }))

function ProductMenu(props) {
    return (
        <React.Fragment>
             <Box style={{marginBottom:'2rem'}}>
        <Button variant="text" color="inherit">
          All Products
        </Button>
        <Button variant="text" color="inherit">
          T-Shirt
        </Button>
        <Button variant="text" color="inherit">
          Hoodies
        </Button>
        <Button variant="text" color="inherit">
          Jacket
        </Button>
        
       
       <ShowAll variant="text" color="inherit" sx={{ marginLeft: "40rem", color:'white', background:'black' }}>
          Show All
        </ShowAll>
        </Box>
        </React.Fragment>
    );
}

export default ProductMenu;