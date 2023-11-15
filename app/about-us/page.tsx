import React from "react";
import AboutPage from "./template";
import { Box } from "@mui/material";
import ContactUs from "../components/contact";
import Testimonials from "../components/testimonials";
import AboutCulture from "../components/about-culture";
import OurVision from "../components/vision";

const page = () => {
  return (
    <Box>
      <AboutPage />
      <AboutCulture />
      <OurVision />
      <Testimonials />
      <ContactUs />
    </Box>
  );
};

export default page;
