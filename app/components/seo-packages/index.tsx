"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { SEO_Data } from "@/app/static-data/data";
import CheckIcon from "@mui/icons-material/Check";
const SeoPackages = () => {
  return (
    <Box sx={styles.MainBox} data-aos="fade-up" data-aos-duration={3000}>
      <Container>
        <Grid item xs={12} sm={6} sx={{ paddingTop: "80px" }}>
          <Typography fontSize={"11.2px"} sx={styles.MainTitle}>
            SEO Packages
          </Typography>
          <Typography fontSize={"16px"} sx={{ color: "#707070" }}>
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
                sx={styles.PricingGrid}
              >
                <Typography fontSize={"20px"} sx={{ color: "#2a3f79" }}>
                  {item.title}
                </Typography>
                {item.content.map((data) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        color: "#707070",
                        margin: "5px 0px",
                      }}
                      key={`${item?.id}-${index}`}
                    >
                      <CheckIcon sx={{ height: 20, width: 20 }} />
                      <Typography fontSize={"14.4px"}>{data.point}</Typography>
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
