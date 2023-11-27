import React from "react";
import AIML from "./template";
import { convertSeo } from "@/app/utils/seo";
import Testimonials from "@/app/components/testimonials";
import OurPromise from "@/app/components/promise";
import { Box } from "@mui/material";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import WHYDWS from "@/app/components/why-DWS";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import { Social_Media_Data } from "@/app/static-data/data";

export async function generateMetadata() {
  const PageTitle = "AI / ML";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <AIML />
      <StreamLineBuisness
        title="not available"
        heading="not available"
        description={"not available"}
        DataMapping={Social_Media_Data}
      />
      <Testimonials />
      <WHYDWS />
      <MeticulouslyAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
