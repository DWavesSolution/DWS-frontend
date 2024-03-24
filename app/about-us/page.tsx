import React from "react";
import AboutPage from "./template";
import { Box } from "@mui/material";
import ContactUs from "../components/contact";
import Testimonials from "../components/testimonials";
import AboutCulture from "../components/about-culture";
import OurVision from "../components/vision";
import { convertSeo } from "../utils/seo";
import OurCoreValues from "../components/core-value";
export async function generateMetadata() {
  const PageTitle = "About Us";
  const PageDescription =
    "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.";
  const PageKeyword = "Digital Marketing Company";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <AboutPage />
      <AboutCulture />
      <OurVision />
      <OurCoreValues />
      <Testimonials />
      <ContactUs />
    </Box>
  );
};

export default page;
