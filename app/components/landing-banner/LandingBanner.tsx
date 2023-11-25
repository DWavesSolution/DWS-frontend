"use client";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { styles } from "./styles";
import { socialIcons } from "@/app/static-data/data";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import DWSImage from "../DWSImage";
import Aos from "aos";
import "aos/dist/aos.css";

const LandingBanner = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <Box sx={styles.Card}>
      <CardMedia sx={styles.CardMedia} image={"/home_landing.webp"}>
        <Container>
          <Grid data-aos="fade-up" container sx={styles.MainGrid}>
            <Grid item xs={12} lg={10}>
              <Grid item xs={12} lg={9}>
                <Typography
                  fontSize={{ xs: "36px", sm: "60px" }}
                  fontWeight={600}
                  lineHeight={{ xs: "46px", sm: "70px" }}
                  sx={{ color: "white" }}
                >
                  Transforming businesses with custom product innovation
                </Typography>
              </Grid>
              <Grid item xs={12} lg={5.5} sx={{ marginTop: "30px" }}>
                <Typography sx={{ color: "white" }}>
                  We have mastered the end-to-end product development lifecycle
                  to help you go-to-market faster.
                </Typography>
              </Grid>
              <Grid item xs={12} lg={7} sx={{ marginTop: "30px" }}>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={1000}
                >
                  <Button variant="outlined" sx={styles.Button}>
                    <Typography sx={{ color: "white" }}>
                      {"Let's Talk"}
                    </Typography>
                  </Button>
                </ScrollLink>
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

export default LandingBanner;
