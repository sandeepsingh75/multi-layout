import {  Tab, Tabs, Toolbar } from '@mui/material';
import React from 'react';

function HeaderBottom(props) {
    return (
        <React.Fragment>
           {/* <AppBar sx={{background: '#F1F1F1'}}> */}
           <Toolbar sx={{background: '#F1F1F1'}}>
          <Tabs  >
            <Tab sx={{color:'#000000'}} label="Jwellery & Accessories" />
            <Tab  sx={{color:'#000000'}} label=" Clothing & Shoes" />
            <Tab  sx={{color:'#000000'}} label=" Home & Living" />
            <Tab  sx={{color:'#000000'}} label=" Wedding & Party" />
            <Tab  sx={{color:'#000000'}} label=" Toys & Entertainment" />
            <Tab  sx={{color:'#000000'}} label=" Art & Collectibles" />
            <Tab  sx={{color:'#000000'}} label="Craft Supplies & Tools" />
          </Tabs>
        </Toolbar>
           {/* </AppBar> */}
        </React.Fragment>
    );
}

export default HeaderBottom;