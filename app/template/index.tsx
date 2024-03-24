"use client";
import React from "react";
import { styles } from "./styles";
import { Box } from "@mui/material";
import LandingBanner from "../components/landing-banner/LandingBanner";
import ServicesSection from "../components/services";
import ContactUs from "../components/contact";
import OurPromise from "../components/promise";
import ContactAccordion from "../components/accordion";
import AboutUsSection from "../components/about_us";
import MoreQuries from "../components/more_quries";
import TechMarquee from "../components/tech_marquee";

const HomePage = () => {
  return (
    <Box sx={styles.MainBox}>
      <LandingBanner />
      <OurPromise />
      <ServicesSection />
      <AboutUsSection />
      <TechMarquee />
      <ContactAccordion />
      <MoreQuries />
      <ContactUs />
    </Box>
  );
};

export default HomePage;
