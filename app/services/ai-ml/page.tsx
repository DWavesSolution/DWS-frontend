import React from "react";
import AIML from "./template";
import { convertSeo } from "@/app/utils/seo";
import Testimonials from "@/app/components/testimonials";
import OurPromise from "@/app/components/promise";
import { Box } from "@mui/material";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import WHYDWS from "@/app/components/why-DWS";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import { AI_ML_Data, Why_AI_ML } from "@/app/static-data/data";
import ContactUs from "@/app/components/contact";

export async function generateMetadata() {
  const PageTitle = "AI / ML";
  const PageDescription =
    "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.";
  const PageKeyword = "Digital Marketing Company";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <AIML />
      <StreamLineBuisness
        title={""}
        heading="Our Expertise"
        description={""}
        DataMapping={AI_ML_Data}
      />
      {/* <Testimonials /> */}
      <WHYDWS
        title="Why Choose Digital Wave Solution for AI & ML Services?"
        heading=""
        description=""
        DataMapping={Why_AI_ML}
      />
      <MeticulouslyAccordion />
      <ContactUs />
      <OurPromise />
    </Box>
  );
};

export default page;
