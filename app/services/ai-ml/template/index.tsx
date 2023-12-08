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

const AIML = () => {
  return (
    <Box sx={styles.Card}>
      <CardMedia sx={styles.CardMedia} image={""}>
        <Container data-aos="fade-up" data-aos-duration={3000}>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={12} lg={10}>
              <Grid item xs={12}>
                <Typography
                  fontSize={"14.4px"}
                  fontWeight={600}
                  sx={{ color: "black" }}
                >
                  {"Services > AI / ML"}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={9}>
                <Typography
                  fontSize={{ xs: "36px", sm: "52px" }}
                  fontWeight={550}
                  lineHeight={{ xs: "46px", sm: "62px" }}
                  sx={{ color: "#004ca2" }}
                >
                  Digital Waves Solution, where innovation meets intelligence!
                </Typography>
              </Grid>
              <Grid item xs={12} lg={5.5} sx={{ marginTop: "30px" }}>
                <Typography sx={{ color: "black" }}>
                  As a leading provider of artificial intelligence and machine
                  learning services, we are dedicated to transforming your
                  business through cutting-edge technology solutions. We harness
                  the power of AI and ML to drive efficiency, enhance
                  decision-making, and unlock new possibilities for your
                  organisation.
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
                    <Typography sx={{ color: "#004ca2" }}>
                      {"Contact now"}
                    </Typography>
                  </Button>
                </ScrollLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={styles.IconsGrid}>
            <Grid item sm={0.5}>
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
            <Grid container item sm={9} sx={styles.ScoresMainGrid}>
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
                        fontSize={"48px"}
                        fontWeight={700}
                        sx={{ color: "#004ca2" }}
                      >
                        {item.number}
                      </Typography>
                      <Typography fontSize={"14px"}>{item.name}</Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </CardMedia>
    </Box>
  );
};

export default AIML;
