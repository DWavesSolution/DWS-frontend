"use client";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { Core_Values_Data } from "@/app/static-data/data";

const OurCoreValues = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container sx={styles.Container}>
        <Grid container sx={styles.MainGrid}>
          <Grid item xs={12} sx={{ marginBottom: "40px" }}>
            <Typography
              fontSize={"44px"}
              sx={{ color: "#fe7958" }}
              fontFamily={"var(--work-Sans)"}
            >
              Our Core Values
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "40px" }}>
            <Typography
              fontSize={"16px"}
              fontFamily={"var(--nunito)"}
              sx={{ color: "black" }}
            >
              {
                "We develop and nurture every product as our own, prioritizing close collaboration with each client. From day one, we’re putting our heads together to turn your idea into a meaningful digital product. Our expert team is highly responsive and dedicated to ensuring your success, by providing an all-in approach from developing concepts to launching and supporting the product."
              }
            </Typography>
          </Grid>
          <Grid container item xs={12} gap={2} sx={styles.CardMainGrid}>
            {Core_Values_Data.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={5.8}
                  sx={{ ...styles.CardGrid, backgroundColor: item.color }}
                  key={`${item?.id}-${index}`}
                >
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={styles.TextMargin}
                  >
                    {item.id}
                  </Typography>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"28px"}
                    sx={styles.TextMargin}
                  >
                    {item.title}
                  </Typography>
                  <Divider sx={{ border: "1px solid #fe7958" }} />
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"16px"}
                    sx={{ marginTop: "32px" }}
                  >
                    {item.description}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurCoreValues;
