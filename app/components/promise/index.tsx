"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { Link as ScrollLink } from "react-scroll";

const OurPromise = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container sx={styles.MainGrid}>
          <Grid item xs={12} md={5}>
            <Button sx={styles.AnalyticsButton}>
              <Typography sx={styles.Heading}>Analytics</Typography>
            </Button>
            <Typography sx={styles.Title}>
              The Power of Digital Wave Solutions
            </Typography>
            <Typography sx={styles.Description}>
              {
                "At Digital Wave Solutions, our vision is to be your dedicated partner in online success! We're committed to crafting tailored strategies and leveraging our expertise to ride the wave and elevate your business to new heights."
              }
            </Typography>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={1000}
            >
              <Button sx={styles.ChatButton}>
                <Typography sx={styles.ChatButtonTypo}>
                  {"Let's Chat"}
                </Typography>
              </Button>
            </ScrollLink>
          </Grid>
          <Grid container item xs={12} md={6.5}>
            <Grid item xs={12} sm={6} sx={styles.GridSec1}>
              <Typography fontSize={"40px"} color={"#FF6741"}>
                35+
              </Typography>
              <Typography fontSize={"14px"} color={"black"}>
                Tech Stack
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={styles.GridSec2}>
              <Typography fontSize={"40px"} color={"#FF6741"}>
                150+
              </Typography>
              <Typography fontSize={"14px"} color={"black"}>
                Industry Professionals
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={styles.GridSec3}>
              <Typography fontSize={"40px"} color={"#FF6741"}>
                13
              </Typography>
              <Typography fontSize={"14px"} color={"black"}>
                Project Completions
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={styles.GridSec4}>
              <Typography fontSize={"40px"} color={"#FF6741"}>
                97%
              </Typography>
              <Typography fontSize={"14px"} color={"black"}>
                Customer Satisfaction Rate
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPromise;
