"use client";
import React from "react";
import { styles } from "./styles";
import { Box } from "@mui/material";
import LandingBanner from "../components/landing-banner/LandingBanner";
import ServicesSection from "../components/services";
import Scores from "../components/score";
import WorkWithUs from "../components/work-with-us";
import ContactUs from "../components/contact";
import Testimonials from "../components/testimonials";
import Technologies from "../components/technologies";
import OurPromise from "../components/promise";

const HomePage = () => {
  return (
    <Box sx={styles.MainBox}>
      <LandingBanner />
      <OurPromise />
      <ServicesSection />
      <Scores />
      <WorkWithUs />
      <Testimonials />
      <Technologies />
      <ContactUs />
    </Box>
  );
};

export default HomePage;
