import React from "react";
import DigitalProductDevelopment from "./template";
import { Box } from "@mui/material";
import { convertSeo } from "@/app/utils/seo";
import Testimonials from "@/app/components/testimonials";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import WHYDWS from "@/app/components/why-DWS";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import { Streamline_Data, Why_DWS } from "@/app/static-data/data";
import ContactUs from "@/app/components/contact";

export async function generateMetadata() {
  const PageTitle = "Digital Product Development";
  const PageDescription =
    "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.";
  const PageKeyword = "Digital Marketing Company";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
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
      {/* <Testimonials /> */}
      <WHYDWS
        title="Why choose Digital Wave Solution"
        heading="Experience the Distinction with Digital Wave Solutions"
        description="We uphold the belief that each business merits a solution crafted to align with its distinctive needs and goals. Employing our tailored approach and expertise, we deliver customised product development services accompanied by dedicated support."
        DataMapping={Why_DWS}
      />
      <MeticulouslyAccordion />
      <ContactUs />
    </Box>
  );
};

export default page;
