"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { Scores_Card } from "@/app/static-data/data";

const Scores = () => {
  return (
    <Box
      sx={styles.MainBox}
      data-aos="fade-down-right"
      data-aos-duration={3000}
    >
      <Container>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {Scores_Card.map((item, index) => {
            return (
              <Grid
                key={`${item?.id}-${index}`}
                item
                xs={5.8}
                sm={2.8}
                md={2.5}
                lg={2.5}
                sx={styles.ScoresGrid}
              >
                <Box sx={styles.ScoresBox}>
                  <Typography
                    fontSize={"48px"}
                    fontWeight={700}
                    sx={{ color: "#004ca2" }}
                  >
                    {item.number}
                  </Typography>
                  <Typography fontSize={"14px"}>{item.name}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Scores;
