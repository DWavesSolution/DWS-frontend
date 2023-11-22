import React from "react";
import DigitalStrategyConsultation from "./template";
import { convertSeo } from "@/app/utils/seo";
import OurCoreValues from "@/app/components/core-value";
import Testimonials from "@/app/components/testimonials";
import ContactAccordion from "@/app/components/accordion";
import OurPromise from "@/app/components/promise";
import { Box } from "@mui/material";

export async function generateMetadata() {
  const PageTitle = "Digital Strategy Consultation";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <DigitalStrategyConsultation />
      <Testimonials />
      <OurCoreValues />
      <ContactAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
