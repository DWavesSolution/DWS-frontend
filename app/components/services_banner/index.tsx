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
import { socialIcons } from "@/app/static-data/data";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import DWSImage from "@/app/components/DWSImage";

const ServicesBanner = ({
  Pagetitle,
  MainHeading,
  description,
  dataMapping,
  bgColor,
}: any) => {
  return (
    <Box sx={{ ...styles.Card, backgroundColor: bgColor }}>
      <CardMedia sx={styles.CardMedia} image={""}>
        <Container data-aos="fade-up" data-aos-duration={3000}>
          <Grid container sx={styles.MainGrid}>
            <Grid item xs={12} lg={10}>
              <Grid item xs={12}>
                <Typography
                  fontSize={"14.4px"}
                  fontWeight={600}
                  sx={{ color: "black" }}
                  fontFamily={"var(--nunito)"}
                >
                  {Pagetitle}
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography
                  fontFamily={"var(--work-Sans)"}
                  fontSize={"36px"}
                  fontWeight={550}
                  lineHeight={{ xs: "46px" }}
                  sx={{ color: "#fe7a58" }}
                >
                  {MainHeading}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={5.5} sx={{ marginTop: "30px" }}>
                <Typography
                  fontFamily={"var(--nunito)"}
                  sx={{ color: "black" }}
                >
                  {description}
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
                  <Button
                    sx={{
                      ...styles.Button,
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
                </ScrollLink>
              </Grid>
              <Grid container sx={{ marginTop: "30px" }}>
                {socialIcons.map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={4}
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
                {dataMapping.map((item: any, index: any) => {
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

export default ServicesBanner;
