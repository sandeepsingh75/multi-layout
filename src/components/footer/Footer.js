import { Box, Grid,Button, List, ListItem, Typography, styled } from '@mui/material';
import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CircleIcon from '@mui/icons-material/Circle';
import image from '../../images/icons_payment 1.png';
import { topLeftFooter } from '../Helpers/Describe';
import { topRightFooter } from '../Helpers/Describe';
const Scroll = styled('Typography')(({theme})=>({
    [theme.breakpoints.up('lg')]: {
        marginLeft:'4rem',
    },
    [theme.breakpoints.up('md')]: {
        marginLeft: '2rem'
    }
}))
const Images = styled('img')(({theme})=>({
    marginLeft:'10rem',
    [theme.breakpoints.up('lg')]: {
        marginLeft: '15rem'
    },
    [theme.breakpoints.up('md')]: {
        marginLeft: '8rem'
    },
    [theme.breakpoints.down('600px')]: {
        marginLeft: '1rem'
    }
}))

const Footer = () => {
    // console.log('topLeftFooter', topLeftFooter)
    // console.log('topRightFooter', topRightFooter)
    return (
        <Box   sx={{marginTop:'5rem', marginBottom:'3rem'}} >
       <Grid container>
        <Grid item lg={4}>
             <Typography mt={2} mb={1} sx={{fontWeight:800}}>
                {topLeftFooter.title}
             </Typography>
             <Typography sx={{lineHeight:2.5}}>
                 {topLeftFooter.description}             </Typography>
            <Button color='inherit'> <FacebookIcon /> </Button>
            <Button color="inherit"> <TwitterIcon /> </Button>
             <Button color='inherit'> <LinkedInIcon /> </Button>
             <Button color='inherit'> <CircleIcon /> </Button>
        </Grid>

        {
            topRightFooter.map((footer) => (
                <Grid item lg={2.5} spacing={1}>
        
            <List>
            <ListItem>
                    <Typography sx={{fontWeight:800}}> {footer.heading} </Typography>
                </ListItem>
               {
                   footer.menus.map((menu)=>(
                    <ListItem>
                    <Typography> {menu.option} </Typography>
                </ListItem>
                   ))
               }
            </List>
           
        </Grid>
            ))
        }

       </Grid>
     
<Box mt={10}>
    <Grid container>
        <Grid item lg={2} md={2} sm={4}>
        <Typography sx={{fontWeight:'500'}}>
            2022 Coral Inc
        </Typography>
        </Grid>
        <Grid item lg={8} md={8} sm={8}>
        <Images src={image} alt='' sx={{}} />
        </Grid>
        <Grid item lg={2} md={2} sm={12} sx={{fontWeight:'600'}}>
           <Scroll> Scroll Top <ArrowUpwardIcon /></Scroll>
        </Grid>
    </Grid>
</Box>
        </Box>
    );
};

export default Footer;