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
import DWSImage from "../DWSImage";
import CallIcon from "@mui/icons-material/Call";

const LandingBanner = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={styles.Card}>
      <CardMedia
        sx={styles.CardMedia}
        image={isMatch ? "/Mobile_Banner.webp" : "Main_Banner.webp"}
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
                <Link href={"/contact-us"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={styles.Button}
                    endIcon={<CallIcon />}
                  >
                    Contact Us
                  </Button>
                </Link>
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
                        <Link
                          href={item.link}
                          target="blank"
                          rel="noopener"
                          aria-label={item.name}
                        >
                          <DWSImage src={item.logo} alt={item.name} />
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
