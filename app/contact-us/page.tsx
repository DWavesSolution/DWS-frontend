import React from "react";
import ConatctUs from "./template";
import OurPromise from "../components/promise";
import { Box } from "@mui/material";
import { convertSeo } from "../utils/seo";
import ContactAccordion from "../components/accordion";

export async function generateMetadata() {
  const PageTitle = "Contact Us";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <ConatctUs />
      <ContactAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
