import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotAuthorizedPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h2">You Are Not Authorized!</Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        mt="2rem"
      >
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button variant="contained" onClick={() => navigate("/signup")}>
          Signup
        </Button>
      </Box>
    </Box>
  );
};

export default NotAuthorizedPage;
