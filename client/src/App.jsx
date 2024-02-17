import React, { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./services/router.jsx";
import { useMode } from "./services/store.js";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./services/theme.js";

const App = () => {
  const mode = useMode();
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
