import React from "react";
import FlexBetween from "../ui/Fb";
import { useSetLogout, useSetMode } from "../../services/store";
import { Button, useTheme, Typography, IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const setMode = useSetMode();
  const logout = useSetLogout();
  const theme = useTheme();
  const navigate = useNavigate()
  return (
    <nav>
      <FlexBetween
        padding="1rem 6%"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontFamily="cursive, sans-serif"
          fontWeight="1000"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              color: theme.palette.primary.light,
              cursor: "pointer",
            },
          }}
        >
          Blogs
        </Typography>
        <FlexBetween gap="1rem">
          <IconButton onClick={() => setMode()}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode
                sx={{ color: theme.palette.neutral.dark, fontSize: "25px" }}
              />
            )}
          </IconButton>
          <Button variant="contained" onClick={() => logout()}>
            logout
          </Button>
        </FlexBetween>
      </FlexBetween>
    </nav>
  );
};

export default Navbar;
