import React from "react";
import SearchEngineOptimization from "./template";
import { convertSeo } from "@/app/utils/seo";
import Testimonials from "@/app/components/testimonials";
import OurPromise from "@/app/components/promise";
import { Box } from "@mui/material";
import WHYDWS from "@/app/components/why-DWS";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import SeoPackages from "@/app/components/seo-packages";
import { Why_SEO } from "@/app/static-data/data";

export async function generateMetadata() {
  const PageTitle = "Search Engine Optimization";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <SearchEngineOptimization />
      <SeoPackages />
      <Testimonials />
      <WHYDWS
        title="Why Choose Digital Wave Solution for SEO Services?"
        heading=""
        description=""
        DataMapping={Why_SEO}
      />
      <MeticulouslyAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
