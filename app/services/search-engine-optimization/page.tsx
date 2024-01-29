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
import ContactUs from "@/app/components/contact";

export async function generateMetadata() {
  const PageTitle = "Search Engine Optimization";
  const PageDescription =
    "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.";
  const PageKeyword = "Digital Marketing Company";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
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
      <ContactUs />
      <OurPromise />
    </Box>
  );
};

export default page;
