import { Box, Button } from '@mui/material';
import React from 'react';
import b1 from '../../images/brand-1.png';
import b2 from '../../images/brand-2.png';
import b3 from '../../images/brand-3.png';
import b4 from '../../images/brand-4.png';
import b5 from '../../images/brand-5.png';
import {clientLists} from './Describe';


function ClientList(props) {
    console.log('client list', clientLists)
    return (
        <Box sx={{paddingTop:'2rem'}}>
        <Button varient="contained"><img src={b1} alt="" /></Button>
        <Button varient="contained"><img src={b2} alt="" /></Button>
        <Button varient="contained"><img src={b3} alt="" /></Button>
        <Button varient="contained"><img src={b4} alt="" /></Button>
        <Button varient="contained"><img src={b5} alt="" /></Button>
        {
         clientLists.map((lists)=>(
            <Button varient="contained"><img src={lists.img} alt="" /></Button> 
         ))     
        }
        </Box>
    );
}

export default ClientList;