"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Testimonials_Data } from "@/app/static-data/data";
import DWSImage from "../DWSImage";
const Testimonials = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Typography
              fontSize={"44px"}
              fontWeight={500}
              sx={{ paddingBottom: "16px", color: "#004ca2" }}
            >
              Client Testimonials
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography sx={{ width: "45%" }}>
              Trust and success stories from our clients underscore our
              commitment to delivering purpose-driven solutions with excellence.
            </Typography>
          </Grid>
          <Grid container item xs={12} lg={12} sx={styles.SliderMainGrid}>
            <Swiper
              spaceBetween={50}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {Testimonials_Data.map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Box sx={styles.SwiperBox}>
                      <Grid container sx={styles.SwiperGrid}>
                        <Grid
                          item
                          xs={12}
                          sm={5}
                          lg={3.5}
                          sx={styles.ImageGrid}
                        >
                          <Box sx={styles.ImageBox}>
                            <DWSImage
                              src={item.logo}
                              alt="Testiomnials Images"
                              style={{
                                objectFit: "contain",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={7} lg={8}>
                          <Typography sx={{ color: "white" }}>
                            {item.content}
                          </Typography>
                          <Typography
                            sx={{ margin: "20px 0px 20px 0px", color: "white" }}
                          >
                            {item.company}
                          </Typography>
                          <Typography sx={{ color: "white" }}>
                            {item.poisition}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
