import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ProductFilterMenus } from "../Helpers/Describe";

const FilterBtn = styled("Box")(({ theme }) => ({
  marginLeft: "28rem",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "37rem",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "7rem",
  },
  [theme.breakpoints.down("sm")]: {
    // margin:' 2rem 4rem',
  },
  [theme.breakpoints.down("400px")]: {
    // margin:' 2rem 4rem',
  },
}));

function ProductFilter(props) {
  // console.log('Product filter Menus', ProductFilterMenus);
  return (
    <React.Fragment>
      <Box style={{ marginTop: "2rem" }}>
        <Grid container>

          {
            ProductFilterMenus.map((menus)=>(
              <Grid item lg={1.5}>
            <Button varient="text" color="inherit">
              {menus.menu}
            </Button>
          </Grid>
            ))
          }
         
          <Grid item lg={1}>
            <FilterBtn>
              <Button
                variant="contained"
                sx={{ background: "black", color: "white" }}
              >
                <FilterAltIcon /> Filter
              </Button>
            </FilterBtn>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default ProductFilter;
