import React from "react";
import DigitalProductDevelopment from "./template";
import { Box } from "@mui/material";
import { convertSeo } from "@/app/utils/seo";
import Testimonials from "@/app/components/testimonials";
import OurPromise from "@/app/components/promise";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import WHYDWS from "@/app/components/why-DWS";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";

export async function generateMetadata() {
  const PageTitle = "Digital Product Development";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <DigitalProductDevelopment />
      <StreamLineBuisness />
      <Testimonials />
      <WHYDWS />
      <MeticulouslyAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
