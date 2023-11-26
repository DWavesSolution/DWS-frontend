"use client";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import DWSImage from "../DWSImage";
import { Services_Card, Services_Images } from "@/app/static-data/data";

const ServicesSection = () => {
  return (
    <Box sx={styles.MainBox} data-aos="fade-right" data-aos-duration={3000}>
      <Container>
        <Box sx={styles.servicesBox}>
          <Grid container>
            <Grid item xs={12} sx={styles.ServicesText}>
              <Typography fontSize={"12px"}>Services</Typography>
            </Grid>
            <Grid container sx={styles.ServicesContent}>
              <Grid item xs={12} sm={7}>
                <Typography
                  fontSize={{ xs: "28px", lg: "44px" }}
                  letterSpacing={"-1.14px"}
                  sx={{ marginBottom: "24px", color: "#004ca2" }}
                >
                  Building end-to-end product solutions
                </Typography>
                <Typography fontSize={"14px"}>
                  We navigate your product development journey with a
                  forward-thinking mindset and strategic roadmaps, ensuring
                  efficient, sustainable, and successful outcomes.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3} sx={{ display: "flex" }}>
                {Services_Images.map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={3}
                      key={`${item?.id}-${index}`}
                    >
                      <Box sx={{ weight: 55, height: 55 }}>
                        <DWSImage
                          src={item.logo}
                          alt="Services Images"
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {Services_Card.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={5.9}
                    key={`${item?.id}-${index}`}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card sx={styles.Card}>
                      <Grid
                        container
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Grid item xs={12} sm={8} md={8} lg={9}>
                          <Typography fontSize={"16px"} sx={styles.TypoMargin}>
                            {item.id}
                          </Typography>
                          <Typography fontSize={"20px"} sx={styles.TypoMargin}>
                            {item.title}
                          </Typography>
                          <Typography fontSize={"11px"} sx={styles.TypoMargin}>
                            {item.description}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={3}>
                          <Box
                            sx={{
                              height: 170,
                              width: 200,
                            }}
                          >
                            <DWSImage
                              src={item.logo}
                              alt="services Images"
                              style={{ objectFit: "contain" }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container>
                        {item.types.map((subTypes) => {
                          return (
                            <Grid
                              key={`${subTypes?.id}-${index}`}
                              item
                              lg={5.8}
                              sx={{
                                borderRight: "1px solid white",
                                textAlign: "center",
                                margin: "0px 5px 10px 0px",
                              }}
                            >
                              <Typography
                                fontSize={"12px"}
                                sx={{ margin: "0px 5px 0px 0px" }}
                              >
                                {subTypes.name}
                              </Typography>
                            </Grid>
                          );
                        })}
                      </Grid>
                      <Button sx={styles.ServicesButton}>
                        <Typography fontSize={"14px"} sx={{ color: "white" }}>
                          Know more
                        </Typography>
                      </Button>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
