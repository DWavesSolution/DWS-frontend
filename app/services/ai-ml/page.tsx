import React from "react";
import AIML from "./template";
import { convertSeo } from "@/app/utils/seo";
import Testimonials from "@/app/components/testimonials";
import OurPromise from "@/app/components/promise";
import { Box } from "@mui/material";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import WHYDWS from "@/app/components/why-DWS";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";

export async function generateMetadata() {
  const PageTitle = "AI / ML";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <AIML />
      <StreamLineBuisness />
      <Testimonials />
      <WHYDWS />
      <MeticulouslyAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
