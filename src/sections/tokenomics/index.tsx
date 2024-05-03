import { Box, Grid, Hidden, Paper, Typography, styled } from "@mui/material";
import Pet5 from "../../assets/img/pet5.png";
import pet11 from "../../assets/img/pet1-1.webp";
import pet51 from "../../assets/img/pet5-1.webp";
import pet61 from "../../assets/img/pet6-1.webp";
import pet71 from "../../assets/img/pet7-1.webp";
import pet81 from "../../assets/img/pet8-1.webp";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};
const TokenCard = styled(Paper)(({ theme }) => ({
  width: "auto",
  padding: "50px 40px",
  marginTop: 12,
  marginBottom: 4,
  backgroundColor: "rgba(70,37,106,0.5)",
  backdropFilter: "blur(12px)",
  color: theme.palette.primary.contrastText,
  borderRadius: 24,
  position: "relative",
  // display: "flex",
}));
const CaPaper = styled(Box)(({ theme }) => ({
  borderRadius: 12,
  border: "1px solid azure",
  width: "auto",
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  marginTop: 40,
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const TokenoBox = styled(Box)(({ theme }) => ({
  // position: "absolute",
  // bottom: -80,
  // right: 0,
  // alignItems: "flex-end",
}));
const TokenItemBox = styled(Box)(({ theme }) => ({
  borderRadius: 12,
  padding: "6px 20px",
  display: "flex",
  justifyContent: "center",
  width: "auto",
  height: "60px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  alignItems: "center",
  border: `2px solid ${theme.palette.info.main}`,
}));
const Tokenomics = (props: Props) => {
  const handleCopyText = () => {
    const textToCopy = "BMwhQ1HXuzA7ucY8NYHyVq2uwuG47GHj1dNP6xJdoPzD";

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast("copied");
        console.log("Text copied successfully");
      })
      .catch((err) => {
        console.error("Unable to copy text: ", err);
      });
  };
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Typography variant="h2">TOKENOMICS</Typography>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item md={10} sm={10} xs={10}>
          <TokenCard>
            <Hidden smDown>
              <img
                src={Pet5}
                alt="pet5"
                width={"40%"}
                style={{ position: "absolute", left: 0, bottom: -10 }}
              />
            </Hidden>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={{ xs: "column", sm: "column", md: "row" }}
              spacing={4}
            >
              <Grid item md={5} sm={12}>
                <Hidden smUp>
                  {/* <Box> */}
                  <img
                    src={Pet5}
                    alt="pet5"
                    width={"100%"}
                    // height={300}
                    // style={{ width: "100px" }}
                    // style={{ position: "absolute", left: 0, bottom: -20 }}
                  />
                  {/* </Box> */}
                </Hidden>
              </Grid>
              <Grid item md={7} sm={12}>
                <Typography textAlign={"left"} variant="h4">
                  $HAT is cool man
                </Typography>
                <Typography textAlign={"left"} mt={1}>
                  total supply
                </Typography>
                <Typography textAlign={"left"} variant="h3" mt={1}>
                  1000,000,000
                </Typography>
                <Typography textAlign={"left"} mt={1}>
                  ✔ 90% Liquidity Pool
                </Typography>
                <Typography textAlign={"left"} mt={1}>
                  ✔ 5% NFT Airdrop = 3.75% Coolman's Universe | 1.25% Babies
                </Typography>
                <Typography textAlign={"left"} mt={1}>
                  ✔ 5% for future rewards coming soon
                </Typography>
                <CaPaper>
                  <Typography>TOKEN ADDRESS</Typography>
                  <Typography
                    sx={{
                      wordBreak: { xs: "break-all", sm: "none" },
                      cursor: "pointer",
                    }}
                    onClick={handleCopyText}
                  >
                    BMwhQ1HXuzA7ucY8NYHyVq2uwuG47GHj1dNP6xJdoPzD{"       "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      className="inline-block ml-3 -mt-1 cursor-pointer"
                      color="#000"
                      style={{ color: "white" }}
                      height="13"
                      width="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
                    </svg>
                  </Typography>
                </CaPaper>
              </Grid>
            </Grid>
          </TokenCard>
          <Grid container justifyContent={"flex-end"} mt={3}>
            <TokenoBox>
              <Grid
                container
                spacing={{ md: 6, sm: 2, xs: 1 }}
                alignItems="stretch"
              >
                <Grid item md="auto" sm={6} xs={6}>
                  <TokenItemBox>
                    {" "}
                    <img src={pet11} width={30} height={30} />
                    <Typography ml={2}> NO PRESALE</Typography>
                  </TokenItemBox>
                </Grid>
                <Grid item md="auto" sm={6} xs={6}>
                  <TokenItemBox>
                    {" "}
                    <img src={pet51} width={30} height={30} />
                    <Typography ml={2}>
                      {" "}
                      CONTRACT <br />
                      RENOUNCED
                    </Typography>
                  </TokenItemBox>
                </Grid>
                <Grid item md="auto" sm={6} xs={6}>
                  <TokenItemBox>
                    {" "}
                    <img src={pet61} width={30} height={30} />
                    <Typography ml={2}> NO PRESALE</Typography>
                  </TokenItemBox>
                </Grid>
                <Grid item md="auto" sm={6} xs={6}>
                  <TokenItemBox>
                    {" "}
                    <img src={pet71} width={30} height={30} />
                    <Typography ml={2}> NO PRESALE</Typography>
                  </TokenItemBox>
                </Grid>
                <Grid item md="auto" sm={12} xs={12}>
                  <TokenItemBox>
                    {" "}
                    <img src={pet71} width={30} height={30} />
                    <Typography ml={2}> NO PRESALE</Typography>
                  </TokenItemBox>
                </Grid>
              </Grid>
            </TokenoBox>
          </Grid>
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
};

export default Tokenomics;
