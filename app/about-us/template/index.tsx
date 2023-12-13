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
import DWSImage from "@/app/components/DWSImage";
import { Link as ScrollLink } from "react-scroll";

const AboutPage = () => {
  return (
    <Box sx={styles.Card}>
      <CardMedia sx={styles.CardMedia} image={"/culture_landing.webp"}>
        <Container data-aos="fade-up" data-aos-duration={3000}>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={12} lg={10}>
              <Grid item xs={12} lg={9}>
                <Typography
                  sx={{ color: "white" }}
                  fontFamily={"var(--nunito)"}
                >
                  Learn about us
                </Typography>
              </Grid>
              <Grid item xs={12} lg={9} sx={{ marginTop: "20px" }}>
                <Typography
                  fontSize={{ xs: "36px", sm: "60px" }}
                  fontWeight={500}
                  lineHeight={{ xs: "46px", sm: "60px" }}
                  sx={{ color: "white" }}
                  fontFamily={"var(--work-Sans)"}
                >
                  Your tech innovator building transformative technology
                  solutions
                </Typography>
              </Grid>
              <Grid item xs={12} lg={5.5} sx={{ marginTop: "30px" }}>
                <Typography
                  sx={{ color: "white" }}
                  fontFamily={"var(--nunito)"}
                >
                  We are a team of tech enthusiasts who foster a culture of
                  creativity, inclusivity, and continuous learning for all to
                  thrive in the tech industry.
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
                      sx={{ color: "white" }}
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

export default AboutPage;
