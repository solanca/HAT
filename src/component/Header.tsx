import {
  AppBar,
  Box,
  Drawer,
  Grid,
  Hidden,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/img/logo.gif";

type Props = {};
const MenuBtn = styled(Box)(({ theme }) => ({
  padding: 10,
  marginRight: 30,
  cursor: "pointer",
  fontWeight: 600,
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    borderRadius: 20,
  },
  transition: "background-color 0.3s ease, border-radius 0.4s ease",
}));

const Header = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const scrollToAboutMe = (id: string) => {
    const aboutMeSection = document.getElementById(id);
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <AppBar
        sx={{
          background: "transparent",
          position: "absolute",
          top: 10,
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ mx: { xs: 1, sm: 4, md: 6 } }}>
          <img src={logo} alt="logo" width={60} />
          <Hidden smUp>
            <Box flexGrow={1} />
          </Hidden>
          <Hidden smDown>
            <Grid container justifyContent={"center"}>
              <MenuBtn onClick={() => scrollToAboutMe("tokenomics")}>
                tokenomics
              </MenuBtn>
              <MenuBtn onClick={() => scrollToAboutMe("how-to-buy")}>
                how to buy
              </MenuBtn>
              <MenuBtn>disclaim</MenuBtn>
              {/* <MenuBtn>tokenomics</MenuBtn>
          <MenuBtn>tokenomics</MenuBtn> */}
            </Grid>
          </Hidden>
          <Hidden smUp>
            <svg
              onClick={() => setOpen(true)}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="5"
                x2="18"
                y2="5"
                stroke="#fff"
                stroke-width="2"
              />
              <line
                x1="2"
                y1="10"
                x2="18"
                y2="10"
                stroke="#fff"
                stroke-width="2"
              />
              <line
                x1="2"
                y1="15"
                x2="18"
                y2="15"
                stroke="#fff"
                stroke-width="2"
              />
            </svg>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 150, display: "flex", justifyContent: "center" }}
          role="presentation"
        >
          <List sx={{ mt: 6 }}>
            <ListItemButton
              onClick={() => {
                scrollToAboutMe("tokenomics");
                setOpen(false);
              }}
            >
              <ListItemText sx={{ textShadow: "none" }}>
                tokenomics
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                scrollToAboutMe("how-to-buy");
                setOpen(false);
              }}
            >
              <ListItemText sx={{ textShadow: "none" }}>
                how to buy
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                scrollToAboutMe("disclaim");
                setOpen(false);
              }}
            >
              <ListItemText sx={{ textShadow: "none" }}>disclaim</ListItemText>
            </ListItemButton>
            {/* <ListItemButton
              onClick={() => {
                scrollToAboutMe("how_to_buy");
                setOpen(false);
              }}
            >
              <ListItemText sx={{ textShadow: "none" }}>
                How to buy
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                scrollToAboutMe("about");
                setOpen(false);
              }}
            >
              <ListItemText sx={{ textShadow: "none" }}>About Me</ListItemText>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                scrollToAboutMe("memes");
                setOpen(false);
              }}
            >
              <ListItemText sx={{ textShadow: "none" }}>memes</ListItemText>
            </ListItemButton> */}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
