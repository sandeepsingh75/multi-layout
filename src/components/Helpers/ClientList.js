import { Box, Button } from '@mui/material';
import React from 'react';
import {clientLists} from './Describe';


function ClientList(props) {
    console.log('client list ', clientLists)
    return (
        <Box sx={{paddingTop:'2rem'}}>
       
        {
         clientLists.map((image)=> {
             const { img } = image
             console.log('img', img)
             return (
                <Button varient="contained"><img src={img} alt="" /></Button>
             )
         })     
        }
        </Box>
    );
}

export default ClientList;