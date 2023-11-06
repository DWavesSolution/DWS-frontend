import React from "react";
import { styles } from "./styles";
import { Box } from "@mui/material";
import LandingBanner from "../components/landing-banner/LandingBanner";
import Partners from "../components/partner";
import ServicesSection from "../components/services";

const HomePage = () => {
  return (
    <Box sx={styles.MainBox}>
      <LandingBanner />
      <Partners />
      <ServicesSection />
    </Box>
  );
};

export default HomePage;
