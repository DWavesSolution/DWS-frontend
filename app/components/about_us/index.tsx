import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DWSImage from "../DWSImage";
import AboutUsImage from "../../../public/About_us.png";
import { styles } from "./styles";

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
              <Typography fontSize={"40px"} fontWeight={500}>
                Why you should choose us?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                {
                  "At Digital Wave Solutions, we are not just a digital marketing company and a software development house, we are your companions in success in all digital platforms. With our cutting-edge strategies and thorough understanding of the digital landscape, we assist many great businesses like yours in making waves online. From compelling social media campaigns to high-end SEO techniques, we're here to promote your brand and drive real outcomes. Let's explore the digital wave together and make your online presence truly valued."
                }
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: { xs: "10px", sm: "0px" } }}>
              <Button sx={styles.BannerButtons}>
                <Typography
                  sx={{ ...styles.BannerButtonsTypo, color: "#fe7958" }}
                >
                  Learn More
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
