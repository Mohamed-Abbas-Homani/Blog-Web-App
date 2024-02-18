import React from "react";
import Navbar from "../Components/app/Navbar";
import { Box } from "@mui/material";
import UserWidget from "../Components/app/UserWidget";
import FlexBetween from "../Components/ui/Fb";
const HomePage = () => {

  return (
    <Box width="100%" height="100%">
      <Navbar />
      <Box width="100%" display="flex" >
        <FlexBetween gap="3rem" width="100%">
          <Box flex={1} display="flex" justifyContent="center">
            <UserWidget />
          </Box>
          <Box flex={3}  display="flex" justifyContent="center">
            <UserWidget />
          </Box>
          <Box flex={1.5}  display="flex" justifyContent="center">
            <UserWidget />
          </Box>
        </FlexBetween>        
      </Box>
    </Box>
  );
};

export default HomePage;
