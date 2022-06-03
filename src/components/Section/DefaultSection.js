import { Box  } from "@mui/material";
  import React from "react";
 
  import {styled} from '@mui/material/styles';
import ProductList from "../Products/ProductList";
import ProductFilter from "../Products/ProductFilter";
  
 const New = styled('Typography')(({theme})=>({
  margin: '6rem 30rem',fontSize: '24px',fontWeight: '600',
  [theme.breakpoints.down('lg')]: {
    margin:' 2rem 21rem',
   },
  [theme.breakpoints.down('md')]: {
    margin:' 2rem 12rem',
   },
   [theme.breakpoints.down('sm')]: {
    margin:' 2rem 4rem',
   },
   [theme.breakpoints.down('400px')]: {
    margin:' 2rem 4rem',
   }
 }));

 
  
  const DefaultSection = () => {
    return (
      <Box
       marginTop="5rem"
      >
        <New varient="h1" sx={{}}>New Products</New>
       
        <ProductFilter />
        <ProductList />
      </Box>
    );
  };
  
  export default DefaultSection;
  