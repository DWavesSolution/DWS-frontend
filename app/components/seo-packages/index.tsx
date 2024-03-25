"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { SEO_Data } from "@/app/static-data/data";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const SeoPackages = () => {
  return (
    <Box sx={styles.MainBox} data-aos="fade-down" data-aos-duration={3000}>
      <Container>
        <Grid item xs={12} sm={6} sx={{ paddingTop: "80px" }}>
          <Typography
            fontFamily={"var(--nunito)"}
            fontSize={"18px"}
            sx={styles.MainTitle}
          >
            SEO Packages
          </Typography>
          <Typography
            fontFamily={"var(--nunito)"}
            fontSize={"16px"}
            sx={{ color: "#707070" }}
          >
            Choose the package that suits your business needs and goals. Our
            packages are designed to deliver comprehensive SEO solutions,
            ensuring a holistic approach to improving your online presence.
          </Typography>
        </Grid>
        <Grid container gap={2} sx={styles.MainGrid}>
          {SEO_Data.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={2.8}
                key={`${item?.id}-${index}`}
                sx={{...styles.PricingGrid,backgroundColor:item.color}}
              >
                <Typography
                  fontFamily={"var(--nunito)"}
                  fontSize={"20px"}
                  sx={{ color: "#fe7958" }}
                >
                  {item.title}
                </Typography>
                {item.content.map((data) => {
                  return (
                    <Box sx={styles.IconsBox} key={`${item?.id}-${index}`}>
                      <KeyboardDoubleArrowRightIcon sx={styles.Icons} />
                      <Typography
                        fontFamily={"var(--nunito)"}
                        fontSize={"12px"}
                      >
                        {data.point}
                      </Typography>
                    </Box>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default SeoPackages;
