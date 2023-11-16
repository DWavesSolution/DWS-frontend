import React from "react";
import AboutPage from "./template";
import { Box } from "@mui/material";
import ContactUs from "../components/contact";
import Testimonials from "../components/testimonials";
import AboutCulture from "../components/about-culture";
import OurVision from "../components/vision";
import OurPromise from "../components/promise";
import { convertSeo } from "../utils/seo";
export async function generateMetadata() {
  const PageTitle = "About Us";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <AboutPage />
      <AboutCulture />
      <OurVision />
      <Testimonials />
      <ContactUs />
      <OurPromise />
    </Box>
  );
};

export default page;
