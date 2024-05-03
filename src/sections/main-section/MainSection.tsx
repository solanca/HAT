import React, { useMemo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import Pet1 from "../../assets/img/pet1.png";
import Pet2 from "../../assets/img/pet7.png";
import Pet3 from "../../assets/img/pet3.png";
import Pet4 from "../../assets/img/pet4.png";
import Pet5 from "../../assets/img/pet5.png";
import Pet6 from "../../assets/img/pet8.png";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import {
  Box,
  GlobalStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const backgrounds = [
  "linear-gradient(0deg,rgba(199, 79, 128, 1) 0%,rgba(255, 150, 162, 1) 30%,rgba(255, 150, 162, 1) 70%,rgba(199, 79, 128, 1) 100%)",
  "linear-gradient(    0deg,    rgba(204, 131, 40, 1) 0%,    rgba(225, 208, 181, 1) 30%,    rgba(225, 208, 181, 1) 70%,    rgba(204, 131, 40, 1) 100%  )",
  "linear-gradient(    0deg,    rgba(111, 209, 255, 1) 0%,    rgba(255, 184, 184, 1) 30%,    rgba(255, 184, 184, 1) 70%,    rgba(111, 209, 255, 1) 100%  )",
  " linear-gradient(    0deg,    rgba(78, 203, 143, 1) 0%,    rgba(255, 219, 120, 1) 30%,    rgba(255, 219, 120, 1) 70%,    rgba(78, 203, 143, 1) 100%  )",
  "linear-gradient(    0deg,    rgba(45, 178, 222, 1) 0%,    rgba(194, 236, 255, 1) 30%,    rgba(194, 236, 255, 1) 70%,    rgba(45, 178, 222, 1) 100%  )",
];
const chars = ["HELLO", "WORLD", "$HAT", "THANKS", "WOW"];

export default function MainSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const animate = (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.8,
      delay: (index + 1) / 10,
      duration: 1,
    },
  });
  return (
    <div
      style={{
        height: "100vh",
        // width: "100vw",
        display: "flex",
        placeItems: "center",
      }}
    >
      <GlobalStyles
        styles={{
          ":root": {
            background: backgrounds[activeSlide],
            transition: "background 0.4s ease",
          },
        }}
      />
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            // spaceBetween: 100,
          },
        }}
        effect={isMobile ? "slide" : "coverflow"}
        grabCursor={true}
        navigation={isMobile ? true : false}
        centeredSlides={true}
        loop={true}
        // slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: window.innerWidth,

          depth: 1200,
          modifier: 1.2,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        parallax
        onSlideChange={(swiper) => {
          let adjustedIndex;
          switch (swiper.realIndex) {
            case 0:
              adjustedIndex = 0; // Map realIndex 0 to background 0
              break;
            case 5:
              adjustedIndex = 1; // Map realIndex 5 to background 1
              break;
            default:
              adjustedIndex = swiper.realIndex % backgrounds.length;
              break;
          }
          setActiveSlide(adjustedIndex);
        }} // Update activeSlide state on slide change
      >
        <SwiperSlide>
          <img src={Pet1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet6} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
      <Box
        sx={{
          top: "43%",
          left: 0,
          right: 0,
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          zIndex: 1000,
          fontSize: 80,
          fontWeight: 900,
          color: "azure",
        }}
      >
        {useMemo(
          () => (
            <span style={{ display: "inline-block" }}>
              {chars.map(
                (item, index) =>
                  activeSlide === index &&
                  chars[index].split("").map((item, index) => (
                    <AnimatePresence>
                      <motion.span
                        initial={{ y: 100 + index * 10, opacity: 0 }}
                        animate={animate(index)}
                        style={{ display: "inline-block" }}
                      >
                        {item}
                      </motion.span>
                    </AnimatePresence>
                  ))
              )}
            </span>
          ),
          [chars[activeSlide]]
        )}
      </Box>
    </div>
  );
}
