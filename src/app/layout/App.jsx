import {
  Container,
  createTheme,
  CssBaseline,
  darkScrollbar,
  Grid,
  ThemeProvider,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { isBrowser } from "react-device-detect";
//import styled, { ThemeProvider } from "styled-components";
import SideBar from "./SideBar";
import AppButtons from "./AppButtons";
import Home from "../pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#FFFFFF" : "#000000",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: paletteType === "dark" ? darkScrollbar() : null,
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: "rgba(255, 255, 255, 0.12)",
          },
        },
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <button onClick={toggleDarkMode}>다크모드</button>
      <CssBaseline enableColorScheme />
      <Container
        sx={{ m: 0, p: 0, overflowY: "hidden" }}
        maxWidth={false}
        disableGutters
      >
        <Grid container sx={{ overflow: "auto", overflowY: "hidden" }}>
          <Grid container sx={{ overflow: "auto" }}>
            {/* SideBar */}
            <Grid item sx={{ width: 50 }}>
              <SideBar darkMode={darkMode}></SideBar>
            </Grid>
            <Grid
              item
              sx={{
                width: 220,
                backgroundColor: darkMode ? "#252527" : "#f3f3f3",
              }}
            >
              <AppButtons />
            </Grid>
            {/* MainContent */}
            <Grid item xs zeroMinWidth>
              <Grid
                sx={{
                  scrollBehavior: "smooth",
                  // overflow: 'scroll',
                  overflowY: "auto",
                  height: `calc(100vh - 20px - 33px)`,
                }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
