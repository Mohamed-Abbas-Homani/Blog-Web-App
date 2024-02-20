import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSetLogout } from "../services/store";
import { useNavigate } from "react-router-dom";

const AuthorizedPage = () => {
  const logout = useSetLogout();
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h2">You Are Authorized!</Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        mt="2rem"
      >
        <Button variant="contained" onClick={() => logout()}>
          Logout
        </Button>
        <Button variant="contained" onClick={() => navigate("/")}>
          Home
        </Button>
      </Box>
    </Box>
  );
};

export default AuthorizedPage;
