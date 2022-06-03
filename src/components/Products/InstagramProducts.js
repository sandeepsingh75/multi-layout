import { Image } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';
import img1 from '../../images/i02 1.png'
import img2 from '../../images/i03 1.png'
import img3 from '../../images/i07 1.png'
import img4 from '../../images/i011 1.png'
import img5 from '../../images/i012 2.png'
import img6 from '../../images/i014 1.png'

function InstagramProducts(props) {
    return (
        <React.Fragment>
            <Grid container>
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
         <Image src={img5} alt="" loading="lazy" />
        </Grid>
        <Grid item md={2}>
         <Image src={img6} alt="" loading="lazy" /> 
        </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default InstagramProducts;