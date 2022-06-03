import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import image from '../../images/engin-akyurt-jaZoffxg1yc-unsplash 1.png'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { styled } from "@mui/material/styles";



const Image = styled('img')(({theme})=>({
    borderRadius:'10rem 0',
    [theme.breakpoints.down('md')]: {
        marginTop:'5rem'
    }
}))

const HomeSlider = () => {
    return (
        <>        
        <Box sx={{background:'#F1F1F1'}}> 
            <Grid container sx={{paddingTop:'10rem'}} >
                <Grid item md={6} sx={{mt:10, ms:5}}> 
                    <Box variant='h1' sx={{fontSize:'5rem', margin:'2.5'}}>Collections</Box>
                    <Box variant='h1' sx={{fontSize:"1.5rem", lineHeight:2}}>You Can Explore And Shop Many Different <br />Collection 
                    From Various Brands Here</Box>
                    <Button variant='contained'  sx={{marginTop:'2rem', color:'white', background:'black'}} startIcon={<ShoppingBagIcon />}>Shop Now</Button>
                </Grid>
                <Grid item md={6} sx={{width:'100%'}}>
                   <Image src={image} alt="" sx={{ border:'1px solid black' ,borderStyle:'outset', zIndex:"10"}} />
                </Grid>
            </Grid>

        </Box>
        
        </>
    );
};

export default HomeSlider;