import React from "react";
import ConatctUs from "./template";
import { Box } from "@mui/material";
import { convertSeo } from "../utils/seo";
import ContactAccordion from "../components/accordion";
import SeoSubcription from "../components/seo-subcription";

export async function generateMetadata() {
  const PageTitle = "Contact Us";
  const PageDescription =
    "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.";
  const PageKeyword = "Digital Wave Solutions";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <ConatctUs />
      <SeoSubcription />
      <ContactAccordion />
    </Box>
  );
};

export default page;
