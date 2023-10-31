import React from "react";
import { styles } from "./styles";
import { Box } from "@mui/material";
import LandingBanner from "../components/landing-banner/LandingBanner";
const HomePage = () => {
  return (
    <Box sx={styles.MainBox}>
      <LandingBanner />
    </Box>
  );
};

export default HomePage;
