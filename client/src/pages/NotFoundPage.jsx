import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h2">Are You Lost?</Typography>
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
        <Button variant="contained" onClick={() => navigate("/")}>
          Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
