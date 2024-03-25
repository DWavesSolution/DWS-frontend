"use client";
import React from "react";
import { styles } from "./styles";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Scores_Card, socialIcons } from "@/app/static-data/data";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import DWSImage from "@/app/components/DWSImage";

const SocialMediaMarketing = () => {
  return (
    <Box sx={styles.Card}>
      <CardMedia sx={styles.CardMedia} image={""}>
        <Container data-aos="fade-up" data-aos-duration={3000}>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={12} lg={10}>
              <Grid item xs={12}>
                <Typography
                  fontFamily={"var(--nunito)"}
                  fontSize={"14.4px"}
                  fontWeight={600}
                  sx={{ color: "black" }}
                >
                  {"Services > Social Media Marketing"}
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography
                  fontFamily={"var(--work-Sans)"}
                  fontSize={{ xs: "36px", sm: "52px" }}
                  fontWeight={550}
                  lineHeight={{ xs: "46px", sm: "62px" }}
                  sx={{ color: "#004ca2" }}
                >
                  Are Digital and Social Media Marketing Essential to Business?
                </Typography>
              </Grid>
              <Grid item xs={12} lg={5.5} sx={{ marginTop: "30px" }}>
                <Typography
                  fontFamily={"var(--nunito)"}
                  sx={{ color: "black" }}
                >
                  {
                    "Yes. Digital and social media marketing are critical components of online success. Although digital and social media marketing strategies vary, these marketing tactics share the same goals: to boost brand awareness and drive more revenue."
                  }
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
                      sx={{ color: "#004ca2" }}
                    >
                      {"Contact now"}
                    </Typography>
                  </Button>
                </ScrollLink>
              </Grid>
              <Grid container sx={{ marginTop: "30px" }}>
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
              <Grid container sx={styles.ScoresMainGrid}>
                {Scores_Card.map((item, index) => {
                  return (
                    <Grid
                      key={`${item?.id}-${index}`}
                      item
                      xs={5.8}
                      sm={2.8}
                      sx={styles.ScoresGrid}
                    >
                      <Box sx={styles.ScoresBox}>
                        <Typography
                          fontFamily={"var(--work-Sans)"}
                          fontSize={"48px"}
                          fontWeight={700}
                          sx={{ color: "#fe7958" }}
                        >
                          {item.number}
                        </Typography>
                        <Typography
                          fontFamily={"var(--nunito)"}
                          fontSize={"14px"}
                        >
                          {item.name}
                        </Typography>
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

export default SocialMediaMarketing;
