import { Box, Grid } from '@mui/material';
import React from 'react';
import c1 from '../../images/image-category-1.png'
import c2 from '../../images/image-category-2.png'
import c3 from '../../images/image-category-3.png'
import c4 from '../../images/image-category-4.png'
import c5 from '../../images/image-category-5.png'

function ThmbGrid(props) {
    return (
        <React.Fragment>
             <Grid  container rowSpacing={1} columnSpacing={{ xs: 10, sm: 2, md: 1 }} sx={{mt:'3rem'}}>
        <Grid item lg={6} md={6} sm={6}>
        <Box> <img src={c1} alt="" style={{width:'100%', height:'39.3rem'}} /></Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12}>
          <Grid container spacing={1}>
            <Grid item lg={6} md={4} sm={6} xs={12}>
              <Box> <img src={c2} alt=""  /></Box>
            </Grid>
            <Grid item lg={6} md={4} sm={6} xs={12}>
            <Box> <img src={c3} alt="" /></Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6} md={4} sm={6} xs={12}>
            <Box> <img src={c4} alt="" /></Box>
            </Grid>
            <Grid item lg={6} md={4} sm={6} xs={12}>
            <Box> <img src={c5} alt="" /></Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        </React.Fragment>
    );
}

export default ThmbGrid;