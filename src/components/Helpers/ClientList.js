import { Box, Button } from '@mui/material';
import React from 'react';
import b1 from '../../images/brand-1.png';
import b2 from '../../images/brand-2.png';
import b3 from '../../images/brand-3.png';
import b4 from '../../images/brand-4.png';
import b5 from '../../images/brand-5.png';

function ClientList(props) {
    return (
        <Box>
             <Button varient="contained"><img src={b1} alt="" /></Button>
        <Button varient="contained"><img src={b2} alt="" /></Button>
        <Button varient="contained"><img src={b3} alt="" /></Button>
        <Button varient="contained"><img src={b4} alt="" /></Button>
        <Button varient="contained"><img src={b5} alt="" /></Button>
        </Box>
    );
}

export default ClientList;