import { useMediaQuery } from "@mui/material";
import { useTheme} from '@mui/material/styles';
import { createTheme } from "@mui/system";
import React from 'react';
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    // const theme = useTheme();
    
    const theme = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1325,
            xl: 1536,
          },
        },
      });
      
    const matches = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <>
        {
            matches ? <NavbarMobile /> : <NavbarDesktop />
        }
        </>
    );
};

export default Navbar;