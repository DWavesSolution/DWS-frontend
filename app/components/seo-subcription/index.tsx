"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { styles } from "./styles";
import { Subscription_Data } from "@/app/static-data/data";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const SeoSubcription = () => {
  useEffect(() => {
    const offset = -150;
    const element = document.getElementById("pricing");
    if (element) {
      const offsetPosition = element.offsetTop + offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, []);
  return (
    <Box
      sx={styles.MainBox}
      id="pricing"
      data-aos="fade-up"
      data-aos-duration={3000}
    >
      <Container>
        <Grid container gap={2} sx={styles.MainGrid}>
          {Subscription_Data.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={3.8}
                key={`${item?.id}-${index}`}
                sx={{ ...styles.PricingGrid, backgroundColor: item.color }}
              >
                <Typography
                  fontSize={"30px"}
                  fontFamily={"var(--work-Sans)"}
                  sx={{ color: "#fe7958" }}
                >
                  {item.type}
                </Typography>
                <Typography
                  fontSize={"20px"}
                  fontFamily={"var(--work-Sans)"}
                  sx={{ color: "#fe7958", marginBottom: "5px" }}
                >
                  {item.price}
                </Typography>
                {item.content.map((data) => {
                  return (
                    <Box sx={styles.CardBox} key={`${item?.id}-${index}`}>
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

export default SeoSubcription;
