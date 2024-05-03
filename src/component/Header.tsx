import { AppBar, Toolbar } from "@mui/material";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <AppBar sx={{ background: "transparent", boxShadow: "none" }}>
      <Toolbar>$HAT</Toolbar>
    </AppBar>
  );
};

export default Header;
