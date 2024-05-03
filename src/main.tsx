import React, { useState } from "react";
import "./main.css";
import reactLogo from "./assets/react.svg";
import FarmLogo from "./assets/logo.png";
import Header from "./component/Header";
import MainSection from "./sections/main-section/MainSection";
import Tokenomics from "./sections/tokenomics";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import HowToBuy from "./sections/how-to-buy";
export function Main() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <MainSection />
        <Tokenomics />
        <HowToBuy />
      </ThemeProvider>
    </>
  );
}
