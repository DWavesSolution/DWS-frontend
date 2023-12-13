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
import DWSImage from "../DWSImage";

const LandingBanner = () => {
  return (
    <Box sx={styles.Card}>
      <CardMedia sx={styles.CardMedia} image={"/home_landing.jpg"}>
        <Container data-aos="fade-down" data-aos-duration={3000}>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={12} lg={10}>
              <Grid item xs={12} lg={9}>
                <Typography
                  fontSize={{ xs: "36px", sm: "60px" }}
                  fontWeight={600}
                  lineHeight={{ xs: "46px", sm: "60px" }}
                  sx={{ color: "black" }}
                  fontFamily={"var(--work-Sans)"}
                >
                  Transforming businesses with custom product innovation
                </Typography>
              </Grid>
              <Grid item xs={12} lg={5.5} sx={{ marginTop: "30px" }}>
                <Typography
                  sx={{ color: "black" }}
                  fontFamily={"var(--nunito)"}
                >
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
                    <Typography
                      fontFamily={"var(--nunito)"}
                      sx={{ color: "black" }}
                    >
                      {"Let's Talk"}
                    </Typography>
                  </Button>
                </ScrollLink>
              </Grid>
              <Grid container sx={{ marginTop: "50px", display: "flex" }}>
                {socialIcons.map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={3}
                      sm={1}
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
            </Grid>
          </Grid>
        </Container>
      </CardMedia>
    </Box>
  );
};

export default LandingBanner;
