import React from "react";
import { useSetLogin } from "../services/store";
import Login from "../Components/app/Login";
import Navbar from "../Components/app/Navbar"
import { Box } from "@mui/material";

const LoginPage = () => {
  return (
    <Box width="100%" height="100%" display="flex" justifyContent="space-between" alignItems="center" flexDirection="column">
      <Box width="100%">
      <Navbar />
      </Box>
      <Box width="21%" marginBottom="20%">
        <Login />
      </Box>
      
    </Box>
  );
};

export default LoginPage;
