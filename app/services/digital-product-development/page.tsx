import React from "react";
import DigitalProductDevelopment from "./template";
import { Box } from "@mui/material";
import { convertSeo } from "@/app/utils/seo";
import Testimonials from "@/app/components/testimonials";
import OurPromise from "@/app/components/promise";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import WHYDWS from "@/app/components/why-DWS";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import { Streamline_Data } from "@/app/static-data/data";

export async function generateMetadata() {
  const PageTitle = "Digital Product Development";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <DigitalProductDevelopment />
      <StreamLineBuisness
        title="DIGITAL PRODUCT DEVELOPMENT SERVICES"
        heading="Streamline Your Business with Digital Product Development Services"
        description={
          "Acquire scalable digital solutions from a team of seasoned professionals specialising in Digital Wave Solutions. Our experts comprehensively manage the entire development lifecycle, encompassing ideation, prototyping, launch, and ongoing maintenance. Rest assured, you'll be equipped with the requisite tools and resources to thrive in the dynamic digital marketplace."
        }
        DataMapping={Streamline_Data}
      />
      <Testimonials />
      <WHYDWS />
      <MeticulouslyAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
