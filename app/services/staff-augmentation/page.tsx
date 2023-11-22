import React from "react";
import StaffAugmentation from "./template";
import { convertSeo } from "@/app/utils/seo";
import { Box } from "@mui/material";
import OurCoreValues from "@/app/components/core-value";
import Testimonials from "@/app/components/testimonials";
import ContactAccordion from "@/app/components/accordion";
import OurPromise from "@/app/components/promise";

export async function generateMetadata() {
  const PageTitle = "Staff Augmentation";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <StaffAugmentation />
      <Testimonials />
      <OurCoreValues />
      <ContactAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
