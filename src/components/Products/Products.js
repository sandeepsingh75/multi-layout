import {
    Box,
    Button,
    Typography,
  } from "@mui/material";
  import React from "react";
  import p1 from "../../images/p1.png";
  import p2 from "../../images/p2.png";
  import p3 from "../../images/p3.png";
  import p4 from "../../images/p4.png";
  import p5 from "../../images/p5.png";
  import p6 from "../../images/p6.png";
  import p7 from "../../images/p7.png";
  import p8 from "../../images/p8.png";
import  {styled} from '@mui/material/styles';
import Slider from "react-slick";
import ProductsMenu from "./ProductsMenu";
import { products } from "../Helpers/Describe";

  const Seller = styled(Typography)(({theme})=>({
    marginLeft: '25rem', marginBottom:'3rem',
    [theme.breakpoints.down('lg')]: {
      // marginLeft:'45rem'
     },
    [theme.breakpoints.down('md')]: {
     marginLeft:'14rem'
     },
     [theme.breakpoints.down('sm')]: {
      margin:' 3rem',
     },
     [theme.breakpoints.down('350px')]: {
      // margin:' 2rem 4rem',
     }   
  }));

  
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  const Products = () => {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Box sx={{marginTop:'5rem'}} >
        <Seller variant="h4" component="div" sx={{  }}>
          Best Sellers
        </Seller>
       
       <ProductsMenu />
  
         <Slider {...settings}>
         {
           products.map((images) => (
            <div>
            <img src={images.image} alt="" />
            </div>
           ))
         }
         
         
        </Slider>

      </Box>
    );
  };
  
  export default Products;
  