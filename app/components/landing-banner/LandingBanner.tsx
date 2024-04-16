"use client";
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { styles } from "./styles";
import DWSImage from "../DWSImage";
import BannerImmage from "../../../public/BannerImage.png";
import Link from "next/link";

const LandingBanner = () => {
  return (
    <CardMedia
      image="/bannerhero.png"
      sx={{ height: "100%", width: "100%", backgroundColor: "#fad4ca" }}
    >
      <Box sx={styles.Box}>
        <Container>
          <Grid container sx={styles.MainGrid}>
            <Grid container item xs={12} md={5.9}>
              <Grid item xs={12}>
                <Typography fontSize={"14px"} sx={{ color: "#666666" }}>
                  Welcome to{" "}
                  <span style={{ color: "#fe7958" }}>
                    Digital Wave Solutions
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily={"var(--work-Sans)"}
                  sx={styles.BannerHeading}
                >
                  Transforming businesses with product innovation
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily={"var(--work-Sans)"}
                  sx={styles.BannerPara}
                >
                  In the fast-paced world of tech, finding a cost-effective
                  solution that does not compromise on quality is crucial for
                  businesses in USA and Canada. We will provide you affordable
                  services that can help businesses thrive in the competitive
                  online landscape.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={6} lg={5.1} sx={styles.ButtonGrid}>
                <Link
                  href={"/contact-us"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button
                    sx={{
                      ...styles.BannerButtons,
                      backgroundColor: "#fe7958",
                      "&:hover": {
                        backgroundColor: "#fe7958",
                      },
                    }}
                  >
                    <Typography
                      fontFamily={"var(--work-Sans)"}
                      sx={{
                        ...styles.BannerButtonsTypo,
                        color: "white",
                      }}
                    >
                      Contact Us
                    </Typography>
                  </Button>
                </Link>
                <Link
                  href={"/about-us"}
                  style={{ textDecoration: "none", color: "#fe7958" }}
                >
                  <Button
                    sx={{
                      ...styles.BannerButtons,
                      backgroundColor: "white",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <Typography
                      fontFamily={"var(--work-Sans)"}
                      sx={{ ...styles.BannerButtonsTypo, color: "#fe7958" }}
                    >
                      Learn More
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={2.5} md={3.5}>
                  <Typography
                    fontFamily={"var(--work-Sans)"}
                    fontSize={"64px"}
                    lineHeight={"64px"}
                  >
                    4.9
                  </Typography>
                  <Rating value={5} readOnly sx={{ color: "#fe7958" }} />
                </Grid>
                <Grid container item xs={12} sm={9} md={8.5}>
                  <Grid item xs={2.5} sm={1.5} md={2}>
                    <Avatar alt="Remy Sharp" src="/user.png" />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      fontFamily={"var(--work-Sans)"}
                      fontSize={"14px"}
                    >
                      Ali Gohar
                    </Typography>
                    <Typography
                      fontFamily={"var(--work-Sans)"}
                      fontSize={"12px"}
                      sx={{ color: "#666666" }}
                    >
                      Lead Product Designer
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      fontFamily={"var(--work-Sans)"}
                      sx={styles.BannerSecondPara}
                    >
                      Effortlessly create stunning SAAS landing pages.
                      User-friendly, customizable, and conversion-driven. A
                      game-changer for your online presence!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5.9} sx={styles.MainGridSec2}>
              <Box sx={styles.Image}>
                <DWSImage src={BannerImmage} alt="Banner Image" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </CardMedia>
  );
};

export default LandingBanner;
