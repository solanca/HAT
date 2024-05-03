import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HowItem from "./item";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import meme1 from "../../assets/img/meme1.png";
import meme2 from "../../assets/img/meme2.png";
import meme3 from "../../assets/img/meme3.png";
import meme4 from "../../assets/img/meme4.png";

type Props = {};

const HowToBuy = (props: Props) => {
  return (
    <Box id="how-to-buy">
      <Grid container justifyContent={"center"} mt={14}>
        <Typography variant="h2">HOW TO BUY</Typography>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item md={10} sm={10} xs={10}>
          <Swiper
            grabCursor={true}
            modules={[Pagination]}
            slidesPerView={"auto"}
            spaceBetween={30}
            effect="slide"
            className="how-to-buy-swiper"
          >
            <SwiperSlide className="how-to-buy">
              <HowItem
                step={1}
                title="Use Phantom Wallet"
                image={meme1}
                content="Download Phantom wallet on your device."
                background={"rgba(240,222,238,0.5)"}
              />
            </SwiperSlide>
            <SwiperSlide className="how-to-buy">
              <HowItem
                step={2}
                title="Get some Solana"
                image={meme3}
                content="Purchase Solana(SOL) on an exchange and transfer it to your wallet."
                background={"rgba(255,147,240,0.5)"}
              />
            </SwiperSlide>
            <SwiperSlide className="how-to-buy">
              <HowItem
                step={3}
                title="Go to Jupiter or Raydium"
                image={meme2}
                content="Link your wallet with a decentralized exchange such as Jupiter (https://jup.ag/) or Raydium."
                background={"rgba(254,242,106,0.5)"}
              />
            </SwiperSlide>
            <SwiperSlide className="how-to-buy">
              <HowItem
                step={4}
                title="Select the amount"
                image={meme4}
                content="Select $HAT to be hat man. You can also find it using the contract address."
                background={"rgba(83,231,182,0.5)"}
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowToBuy;
