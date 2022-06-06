import {  Tab, Tabs, Toolbar } from '@mui/material';
import React from 'react';
import {HeaderMenus} from '../../Helpers/Describe'

function HeaderBottom(props) {
  // console.log('HeaderMenu ', HeaderMenus)
    return (
        <React.Fragment>
           <Toolbar sx={{background: '#F1F1F1'}}>
          <Tabs  >
            {
              HeaderMenus.map((menu) => (
                <Tab sx={{color:'#000000'}} label={menu.menu} />
              ))
            }
          </Tabs>
        </Toolbar>
        </React.Fragment>
    );
}
export default HeaderBottom;