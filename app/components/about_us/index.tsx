import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DWSImage from "../DWSImage";
import AboutUsImage from "../../../public/About_us.png";
import { styles } from "./styles";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container sx={styles.MainGrid}>
          <Grid item xs={12} sm={5.8} lg={6}>
            <Box sx={styles.Image}>
              <DWSImage src={AboutUsImage} alt="About us Image" />
            </Box>
          </Grid>
          <Grid container item xs={12} sm={5.8} lg={6} sx={styles.TypoGrid}>
            <Grid item xs={12}>
              <Button sx={styles.AboutUsButton}>
                <Typography sx={styles.Heading}>About Us</Typography>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                fontSize={"40px"}
                fontWeight={500}
                sx={{ color: "#fe7958" }}
              >
                Why you should choose us?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                {
                  "At Digital Wave Solutions, we are not just a digital marketing company and a software development house, we are your companions in success in all digital platforms. With our cutting-edge strategies and thorough understanding of the digital landscape, we assist many great businesses ......"
                }
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: { xs: "10px", sm: "0px" } }}>
              <Link href={"/about-us"} style={{ textDecoration: "none" }}>
                <Button sx={{ ...styles.BannerButtons, color: "#fe7958" }}>
                  <Typography sx={styles.BannerButtonsTypo}>
                    Learn More
                  </Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
