import React from "react";
import SocialMediaMarketing from "./template";
import { convertSeo } from "@/app/utils/seo";
import { Box } from "@mui/material";
import OurCoreValues from "@/app/components/core-value";
import Testimonials from "@/app/components/testimonials";
import ContactAccordion from "@/app/components/accordion";
import OurPromise from "@/app/components/promise";

export async function generateMetadata() {
  const PageTitle = "Social Media Marketing";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <SocialMediaMarketing />
      <Testimonials />
      <OurCoreValues />
      <ContactAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
