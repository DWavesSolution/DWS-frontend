"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { Subscription_Data } from "@/app/static-data/data";
import CheckIcon from "@mui/icons-material/Check";
const SeoSubcription = () => {
  return (
    <Box sx={styles.MainBox} data-aos="fade-up" data-aos-duration={3000}>
      <Container>
        <Grid container gap={2} sx={styles.MainGrid}>
          {Subscription_Data.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={3.8}
                key={`${item?.id}-${index}`}
                sx={styles.PricingGrid}
              >
                <Typography fontSize={"30px"}>{item.type}</Typography>
                <Typography fontSize={"50px"}>
                  {item.price}
                  <span style={{ fontSize: "20px" }}>/Monthly</span>
                </Typography>
                {item.content.map((data) => {
                  return (
                    <Box
                      sx={{ display: "flex", color: "#707070" }}
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

export default SeoSubcription;
