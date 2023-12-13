"use client";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { socialIcons } from "@/app/static-data/data";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import DWSImage from "../DWSImage";

const LandingBanner = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box sx={styles.Card}>
      <CardMedia
        sx={styles.CardMedia}
        image={isMatch ? "/overlay.jpg" : "home_landing.jpg"}
      >
        <Container data-aos="fade-up" data-aos-duration={3000}>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={12} lg={10}>
              <Grid item xs={12} md={9}>
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
              <Grid item xs={12} sm={9} lg={6} sx={{ marginTop: "30px" }}>
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
                      xs={2}
                      sm={1}
                      sx={styles.socialIcons}
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
