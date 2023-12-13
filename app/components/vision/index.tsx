"use client";
import { Our_Vision } from "@/app/static-data/data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DWSImage from "../DWSImage";
import { styles } from "./styles";

const OurVision = () => {
  return (
    <Container data-aos="fade-up" data-aos-duration={3000}>
      <Grid container>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <Typography
            fontSize={"44px"}
            sx={{ color: "#004ca2" }}
            fontFamily={"var(--work-Sans)"}
          >
            Our Vision
          </Typography>
        </Grid>
        <Grid container sx={styles.ImagesGrid}>
          {Our_Vision.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={3.9}
                md={3}
                sx={styles.VisionData}
                key={`${item?.id}-${index}`}
              >
                <Box sx={{ height: 240, width: 240, marginBottom: "16px" }}>
                  <DWSImage src={item.logo} alt={item.title} />
                </Box>
                <Typography
                  fontFamily={"var(--nunito)"}
                  fontSize={"24px"}
                  sx={{ marginBottom: "16px" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  fontFamily={"var(--nunito)"}
                  fontSize={"14px"}
                  sx={{
                    color: "#707070",
                    marginBottom: "16px",
                  }}
                >
                  {item.desription}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Grid container sx={styles.Hire1}>
          <Grid item xs={12} md={5.8}>
            <Box sx={{ height: 645, width: "100%" }}>
              <DWSImage src={"/hire_img_1.webp"} alt="" />
            </Box>
            <Grid item xs={12} sx={styles.Description}>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <Typography
                  fontFamily={"var(--nunito)"}
                  sx={{ paddingTop: "80px" }}
                >
                  We envision a future where we are the go-to partner for
                  digital strategy, consultation, and implementation in industry
                  4.0 by delivering highly scalable technology solutions to
                  drive growth and success for our clients.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={5.8}
            sx={{ marginTop: { xs: "70px", md: "240px" } }}
          >
            <Box sx={{ height: 860, width: "100%" }}>
              <DWSImage src={"/hire_img_2.webp"} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurVision;
