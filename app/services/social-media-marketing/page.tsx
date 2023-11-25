import React from "react";
import SocialMediaMarketing from "./template";
import { convertSeo } from "@/app/utils/seo";
import { Box } from "@mui/material";
import Testimonials from "@/app/components/testimonials";
import OurPromise from "@/app/components/promise";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import WHYDWS from "@/app/components/why-DWS";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";

export async function generateMetadata() {
  const PageTitle = "Social Media Marketing";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <SocialMediaMarketing />
      <StreamLineBuisness />
      <Testimonials />
      <WHYDWS />
      <MeticulouslyAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
