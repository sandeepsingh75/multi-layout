import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import image from '../../images/bannerGirl.png'
import logo from '../../images/1024px-Zara_Logo 1.png'
import { brandbanner } from '../../components/Helpers/Describe';

 const Banner = styled(Box)(()=>({
  backgroundImage: `url(${image})`,
  backgroundSize: '100% 100%',
  backgroundPosition: 'bottom left',
  width: '100%',
  marginTop:'5rem'
  }));

const Logo = styled('img')(({theme})=>({
  height: '10rem', left: '50rem', top: '2rem', position:'absolute',
  [theme.breakpoints.down('lg')]:{
    height: '7rem',
  },
  [theme.breakpoints.down('md')]:{
    left: '38rem', height: '7rem'
  },
  [theme.breakpoints.down('sm')]:{
    left: '24rem', height: '5rem'
  }
}))
////
const Content =styled(Card)(({theme})=>({
  maxWidth:500 , background:'none', color:'white',top: '7rem',left: '42rem', position:'absolute',
    [theme.breakpoints.down('lg')]:{
      marginTop: '-2rem',
    },
    [theme.breakpoints.down('md')]:{
      left:'30rem'
    },
    [theme.breakpoints.down('sm')]:{
      left:'20rem'
    }
}))


const BrandBanner = () => {
  // console.log('banner', brandbanner)
    return (
      <Banner style={{position:'relative', height:'30rem'}}>
              {/* <Box> */}
              <Logo src={logo} alt="" style={{}}/>

<Content sx={{  }} >
<CardContent>
<Typography sx={{ fontSize: 50 }} color="inherit" gutterBottom>
 ZARA
</Typography>
<Typography variant="body2" sx={{maxWidth:300}}>
Lustrous yet understated. The new evening
wear collection exclusively offered at the
reopened Giorgio Armani boutique in Los
Angeles.
 
</Typography>
</CardContent>
<CardActions>
<Button size="large" sx={{color:'black', background:'white'}}>See Collection</Button>
</CardActions>
</Content>
              {/* </Box> */}

      </Banner>
    );
};

export default BrandBanner;