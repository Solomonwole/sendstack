"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A513E2",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#FEFEFE",
    },
    textPrimary: {
      main: "#210033",
      light: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontFamily: "Inter",
      fontWeight: 700,
    },
    h2: {
      fontSize: "25px",
      fontFamily: "Inter",
      fontWeight: 700,
    },
    h3: {
      fontSize: "18px",
      fontFamily: "Inter",
      fontWeight: 500,
    },
    h4: {
      fontSize: "14px",
      fontWeight: 500,
    },
    h5: {
      fontSize: "14px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
    caption: {
      fontSize: "12px",
      color: "#808080"
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          minWidth: "87px",
          minHeight: "40px",
          fontFamily: "Inter",
          fontSize: "14px",
        },
      },
    },
  },
});

export default theme;
