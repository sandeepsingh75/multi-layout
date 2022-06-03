import { Box, Button, Grid, ImageList, ImageListItem, TextField, Typography } from "@mui/material";
import React from "react";
import img1 from '../../images/i02 1.png'
import img2 from '../../images/i03 1.png'
import img3 from '../../images/i07 1.png'
import img4 from '../../images/i011 1.png'
import img5 from '../../images/i012 2.png'
import img6 from '../../images/i014 1.png'
import {styled} from '@mui/material/styles';

const Image = styled('img')(({theme})=>({
  width:'100%'
}));

const NewsLetter = styled(Typography)(({theme})=> ({
  [theme.breakpoints.down('lg')]: {
    padding: '2rem 14rem',
  },
  [theme.breakpoints.down('md')]:{
    padding: '2rem 6rem',
  }
}));

const InputField = styled(Box)(({theme})=>({
  padding: '2.5rem 18rem',
  [theme.breakpoints.down('lg')]:{
    padding: '2.5rem 10rem',
  },
  [theme.breakpoints.down('md')]: {
    padding: '2.5rem 5rem',
  },

}));

const Field = styled(InputField)(({theme})=>({
  [theme.breakpoints.down('sm')]:{
    
  }
}))

const Follow = styled(Typography)(({theme})=> ({
  padding: '4rem 14rem', maxWidth:'100%',
  [theme.breakpoints.down('lg')]:{
    padding: '4rem 11rem',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft:'1rem',     padding: '4rem 4rem'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft:'1rem'
  }
}))

const NewsInsta = () => {
  return (
    <Box sx={{background:'#F1F1F1', width:'100%'}}>
       <Grid container columnSpacing={10}>
        <Grid item lg={12} md={12} sm={12}>
        <Follow sx={{ }}  variant="h4">Follow Products And Discounts On Instagram</Follow>
        </Grid>
         
        <Grid item md={2}>
          <Image src={img1} alt="" loading="lazy"  /> 
        </Grid>
        <Grid item md={2}>
         <Image src={img2} alt="" loading="lazy" /> 
        </Grid>
        <Grid item md={2}>
          <Image src={img3} alt="" loading="lazy" />
        </Grid>
        <Grid item md={2}>
         <Image src={img4} alt="" loading="lazy" />
        </Grid>
        <Grid item md={2}>
         <Image src={img2} alt="" loading="lazy" />
        </Grid>
        <Grid item md={2}>
         <Image src={img6} alt="" loading="lazy" /> 
        </Grid>
      </Grid>
      <Grid container style={{margin:'auto'}}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
        <NewsLetter sx={{ padding: '2.5rem 18rem', marginTop:'5rem' }}  variant="h4">Or Subscribe To The Newsletter</NewsLetter>
        </Grid>
        <Grid item lg={12}>
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
        </Grid>
      </Grid>
     
     {/* <Box sx={{margin: '2rem 18rem'}}>
     <TextField label="Email Address" variant="filled" color="success" focused  sx={{width:'24rem' }}/> <Button>Submit</Button>
     </Box> */}
    </Box>
  );
};

export default NewsInsta;
