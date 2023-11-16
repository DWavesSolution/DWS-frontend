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
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import DWSImage from "@/app/components/DWSImage";

const AboutPage = () => {
  return (
    <Box sx={styles.Card}>
      <CardMedia sx={styles.CardMedia} image={"/culture_landing.webp"}>
        <Container>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={12} lg={10}>
              <Grid item xs={12} lg={9}>
                <Typography sx={{ color: "white" }}>Learn about us</Typography>
              </Grid>
              <Grid item xs={12} lg={9} sx={{ marginTop: "20px" }}>
                <Typography
                  fontSize={{ xs: "36px", sm: "60px" }}
                  fontWeight={500}
                  lineHeight={{ xs: "46px", sm: "70px" }}
                  sx={{ color: "white" }}
                >
                  Your tech innovator building transformative technology
                  solutions
                </Typography>
              </Grid>
              <Grid item xs={12} lg={5.5} sx={{ marginTop: "30px" }}>
                <Typography sx={{ color: "white" }}>
                  We are a team of tech enthusiasts who foster a culture of
                  creativity, inclusivity, and continuous learning for all to
                  thrive in the tech industry.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: "50px" }}>
            {socialIcons.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sx={{ marginBottom: "20px" }}
                  key={`${item?.id}-${index}`}
                >
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

export default AboutPage;
