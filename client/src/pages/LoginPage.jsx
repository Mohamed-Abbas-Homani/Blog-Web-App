import React from "react";
import { useSetLogin } from "../services/store";
import Login from "../Components/app/Login";
import { Box } from "@mui/material";

const LoginPage = () => {
  const login = useSetLogin();

  return (
    <Box width="310px" height="400px">
      <Login />
    </Box>
  );
};

export default LoginPage;
