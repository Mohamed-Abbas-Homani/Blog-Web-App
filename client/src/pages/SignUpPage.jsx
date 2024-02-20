import React from "react";
import Signup from "../Components/app/Signup";
import Navbar from "../Components/app/Navbar";
import { Box } from "@mui/material";

const LoginPage = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
    >
      <Box width="100%">
        <Navbar />
      </Box>
      <Box width="21%" marginBottom="20%">
        <Signup />
      </Box>
    </Box>
  );
};

export default LoginPage;
