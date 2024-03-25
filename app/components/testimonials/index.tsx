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
    <Box sx={styles.MainBox} data-aos="flip-left" data-aos-duration={3000}>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={5}>
            <Typography
              fontSize={"44px"}
              fontWeight={600}
              sx={{ marginBottom: "10px", color: "#fe7958" }}
              fontFamily={"var(--work-Sans)"}
            >
              About Technologies
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              fontFamily={"var(--nunito)"}
              fontSize={"14px"}
              sx={{ color: "#555" }}
            >
              Utilizing an array of technologies, frameworks, libraries, and
              tools, we strive to create websites that not only meet but exceed
              the expectations of our clients. Our diverse toolkit enables us to
              tailor solutions that are innovative, scalable, and precisely
              aligned with the unique requirements of each project. By staying
              at the forefront of industry advancements, we ensure the delivery
              of top-notch websites that seamlessly integrate cutting-edge
              features and functionalities. Our commitment to utilizing the best
              tools available reflects our dedication to providing a superior
              web experience for our clients.
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
                  <SwiperSlide key={`${item?.id}-${index}`}>
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
                          <Typography
                            fontFamily={"var(--nunito)"}
                            sx={{ color: "white" }}
                          >
                            {item.content}
                          </Typography>
                          <Typography
                            fontFamily={"var(--nunito)"}
                            fontSize={"14px"}
                            sx={{
                              margin: "10px 0px 0px 0px",
                              color: "white",
                              fontWeight: 600,
                            }}
                          >
                            {item.TechnologieName}
                          </Typography>
                          <Typography
                            fontFamily={"var(--nunito)"}
                            fontSize={"12px"}
                            sx={{ color: "white", fontWeight: 500 }}
                          >
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
