import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import {styled} from '@mui/material/styles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const FilterBtn = styled('Box')(({theme})=>({
    marginLeft: "40rem",
    [theme.breakpoints.down('lg')]: {
      marginLeft:'37rem'
     },
    [theme.breakpoints.down('md')]: {
     marginLeft:'7rem'
     },
     [theme.breakpoints.down('sm')]: {
      // margin:' 2rem 4rem',
     },
     [theme.breakpoints.down('400px')]: {
      // margin:' 2rem 4rem',
     }
   }))

function ProductFilter(props) {
    return (
        <React.Fragment>
            <Box style={{marginTop:'2rem'}}>
         <Grid container>
            <Grid item  lg={1.5}>
            <Button varient="text" color="inherit">
          All Products
        </Button>
            </Grid>
            <Grid item lg={1}>
            <Button varient="text" color="inherit">
          T-Shirt
        </Button>
            </Grid>
            <Grid item lg={1}>
            <Button varient="text" color="inherit">
          Hoodies
        </Button>
            </Grid>
            <Grid item lg={1}>
            <Button varient="text" color="inherit">
          Jacket
        </Button>
            </Grid>
            {/* <Grid item lg={1}>

            </Grid> */}
            <Grid item lg={1}>
            <FilterBtn>
       <Button variant="contained" sx={{ background:'black' , color:'white' }}>
          <FilterAltIcon /> Filter
        </Button>
       </FilterBtn>
            </Grid>
            
         </Grid>
      
     
        
       
      
       </Box>
        </React.Fragment>
    );
}

export default ProductFilter;