import React, { useState } from "react";
import "./main.css";
import reactLogo from "./assets/react.svg";
import FarmLogo from "./assets/logo.png";
import Header from "./component/Header";
import MainSection from "./sections/main-section/MainSection";
import Tokenomics from "./sections/tokenomics";
export function Main() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainSection />
      <Tokenomics />
    </>
  );
}
