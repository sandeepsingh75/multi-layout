import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import p6 from "../../images/p6.png";
import p7 from "../../images/p7.png";
import p8 from "../../images/p8.png";
import {ProductLists} from '../Helpers/Describe';

function ProductList(props) {
    return (
        <React.Fragment>
              <Grid container sx={{marginTop:2}} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          
          {
            ProductLists.map((lists)=>(
              <Grid item md={3} >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={p1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {lists.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 1 }}
                  >
                    {lists.type}
                    <Typography variant="span" sx={{ marginLeft: 18 }}>
                      {" "}
                      ${lists.price}
                    </Typography>
                  </Typography>
                  <Typography variant="subtitle1" component="div"></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
            ))
          }
                   
        </Grid>
        </React.Fragment>
    );
}

export default ProductList;