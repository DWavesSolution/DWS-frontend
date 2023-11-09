"use client";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { socialIcons } from "@/app/static-data/data";
import DWSImage from "../DWSImage";
import Link from "next/link";

const LandingBanner = () => {
  return (
    <Box sx={styles.Card}>
      <CardMedia sx={styles.CardMedia} image={"/home_landing.webp"}>
        <Container>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={12} lg={10}>
              <Grid item xs={12} lg={9}>
                <Typography
                  fontSize={{ xs: "28px", sm: "60px" }}
                  fontWeight={600}
                  sx={{ color: "white" }}
                >
                  Transforming businesses with custom product innovation
                </Typography>
              </Grid>
              <Grid item xs={12} lg={7} sx={{ marginTop: "30px" }}>
                <Button variant="outlined" sx={styles.Button}>
                  <Typography sx={{ color: "white" }}>
                    {"Let's Talk"}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: "50px" }}>
            {socialIcons.map((item, index) => {
              return (
                <Grid item xs={12} sx={{ marginBottom: "20px" }} key={index}>
                  <Box sx={{ height: 20, width: 20, cursor: "pinter" }}>
                    <Link href={item.link} target="blank">
                      <DWSImage src={item.logo} alt="Social Icons" />
                    </Link>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </CardMedia>
    </Box>
  );
};

export default LandingBanner;
