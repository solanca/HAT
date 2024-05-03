import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#46256A", contrastText: "#F0DEEE" },
    secondary: { main: "#FC3927" },
    info: { main: "#00D5EF" },
    warning: { main: "#FC3927" },
    error: { main: "#FE7D78" },
  },
  breakpoints: {
    values: {
      // extra-small
      xs: 500,
      // small
      sm: 1000,
      // medium
      md: 1200,
      // large
      lg: 1500,
      // extra-large
      xl: 1836,
    },
  },
  typography: {
    h2: { fontFamily: "Hat", fontWeight: 1200, color: "#46256A" },
  },
});
