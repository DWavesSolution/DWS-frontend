import React from "react";
import { styles } from "./styles";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Technology_Logo } from "@/app/static-data/data";
import DWSImage from "../DWSImage";

const TechMarquee = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container sx={styles.MainGrid}>
          <Grid item xs={12} sx={styles.GridStyle}>
            <Button sx={styles.TechStacksButton}>
              <Typography fontFamily={"var(--work-Sans)"} sx={styles.Heading}>
                Tech Stacks
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sx={styles.GridStyle}>
            <Typography
              fontFamily={"var(--work-Sans)"}
              fontSize={"36px"}
              fontWeight={600}
            >
              Technologies we used to make innovation
            </Typography>
          </Grid>
          <Grid item xs={12} md={7} sx={styles.GridStyle}>
            <Typography fontFamily={"var(--work-Sans)"}>
              We navigate your product development journey with a
              forward-thinking mindset and strategic roadmaps, ensuring
              efficient, sustainable, and successful outcomes.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        direction={"right"}
        style={styles.Marquee}
      >
        {Technology_Logo.map((item: any, index) => {
          return (
            <Box sx={styles.MarqueeMainBox} key={`${item.id}-${index}`}>
              <Box sx={{ height: 60, width: 60 }} key={`${item.id}-${index}`}>
                <DWSImage
                  src={item.logo}
                  alt="Tech Logos"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
          );
        })}
      </Marquee>
      <Marquee pauseOnHover={true} gradient={false}>
        {Technology_Logo.map((item: any, index) => {
          return (
            <Box sx={styles.MarqueeMainBox} key={`${item.id}-${index}`}>
              <Box sx={{ height: 60, width: 60 }} key={`${item.id}-${index}`}>
                <DWSImage
                  src={item.logo}
                  alt="Tech Logos"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
          );
        })}
      </Marquee>
    </Box>
  );
};

export default TechMarquee;
