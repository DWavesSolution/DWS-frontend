"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { styles } from "./styles";
import DWSImage from "../DWSImage";
import { Brand_Logo } from "@/app/static-data/data";
import AOS from "aos";
import "aos/dist/aos.css";

const Partners = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid
          data-aos="fade-up"
          data-aos-duration="2000"
          container
          sx={styles.MainGrid}
        >
          <Grid container item xs={12} sm={5.5} lg={6.5}>
            {Brand_Logo.map((item, index) => {
              return (
                <Grid
                  item
                  xs={4}
                  lg={4}
                  sx={styles.brandGrid}
                  key={`${item?.id}-${index}`}
                >
                  <Box
                    sx={{
                      width: 200,
                      height: 80,
                    }}
                  >
                    <DWSImage
                      src={item.logo}
                      alt={"Brand Images"}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Grid container item xs={12} sm={5.5} lg={5}>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={styles.textMargin}>
              <Typography fontSize={"36px"} fontWeight={500}>
                Our Valued Clients
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={10.5} sx={styles.textMargin}>
              <Typography fontSize={"16px"} fontWeight={400}>
                We have built strong relationships with our diverse clientele,
                partnering with them to deliver custom product solutions.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button sx={styles.Button}>View portfolio</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partners;
