"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { Scores_Card } from "@/app/static-data/data";
import DWSImage from "../DWSImage";

const AboutCulture = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container sx={styles.MainGrid}>
          <Grid item xs={12} sx={styles.title}>
            <Typography fontSize={"11px"} sx={{ color: "white" }}>
              OUR DEFINITION OF CULTURE
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={styles.description}>
            <Typography
              fontSize={"28px"}
              fontWeight={400}
              sx={{ color: "white" }}
            >
              Our culture is our foundation, centered around continuous learning
              and driven by our commitment to transparency, inclusivity, and
              high standards of integrity. This drives us to create innovative,
              holistic digital solutions for our clients while adapting to the
              changing environment.
            </Typography>
          </Grid>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            {Scores_Card.map((item, index) => {
              return (
                <Grid
                  key={`${item?.id}-${index}`}
                  item
                  xs={5.8}
                  sm={2.8}
                  md={2.5}
                  sx={styles.ScoresGrid}
                >
                  <Box sx={styles.ScoresBox}>
                    <Typography
                      fontSize={"48px"}
                      fontWeight={700}
                      sx={{ color: "white" }}
                    >
                      {item.number}
                    </Typography>
                    <Typography fontSize={"14px"} sx={{ color: "white" }}>
                      {item.name}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutCulture;
