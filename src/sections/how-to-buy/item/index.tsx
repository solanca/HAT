import { Box, Card, CardMedia, Grid, Typography, styled } from "@mui/material";
import React from "react";
import meme1 from "../../../assets/img/meme1.png";
import { theme } from "../../../styles/theme";

type Props = {
  background: string;
  image: string;
  title: string;
  content: string;
  step: number;
};

interface ItemCardProps {
  background: string;
}

const ItemCard = styled(Card)<ItemCardProps>(({ background }) => ({
  position: "relative",
  borderRadius: 12,
  width: 350,
  height: 400,
  background,
  backdropFilter: "blur(12px)",
}));
const StepBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: 100,
  height: 50,
  borderRadius: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: -25,
  zIndex: 1000,
  right: 120,
  fontWeight: 700,
  background: theme.palette.primary.contrastText,
  boxShadow: "1px 2px 2px",
}));

const HowItem = ({ background, title, image, content, step }: Props) => {
  return (
    <Box sx={{ position: "relative" }}>
      <StepBox>Step {step}</StepBox>
      <ItemCard background={background}>
        <Box m={4}>
          <Grid container justifyContent={"center"}>
            <Typography textAlign={"center"} variant="h5">
              {title}
            </Typography>
          </Grid>
          <Box height={90} sx={{ display: "flex", placeItems: "center" }}>
            <Typography textAlign={"center"}>{content}</Typography>
          </Box>
          <CardMedia
            component={"img"}
            src={image}
            height={220}
            style={{ borderRadius: 10 }}
          />
        </Box>
        {/* <img src={meme1} /> */}
      </ItemCard>
    </Box>
  );
};

export default HowItem;
