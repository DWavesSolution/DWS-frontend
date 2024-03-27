import React from "react";
import { convertSeo } from "@/app/utils/seo";
import { Box } from "@mui/material";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import {
  Development_Faq,
  Scores_Card,
  Web_Development_Data,
} from "@/app/static-data/data";
import ContactUs from "@/app/components/contact";
import ServicesBanner from "@/app/components/services_banner";

export async function generateMetadata() {
  const PageTitle = "Expert Web Development";
  const PageDescription =
    "Elevate your brand with our tailored web development packages. Boost engagement, reach, and results with cost-effective solutions for every business";
  const PageKeyword = "Web Development";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <ServicesBanner
        Pagetitle={"Services > Web Development"}
        MainHeading={"Are Web Development Essential to Business?"}
        description={
          "Yes. Web Development are critical components of online success. Although digital and social media marketing strategies vary, these marketing tactics share the same goals: to boost brand awareness and drive more revenue."
        }
        dataMapping={Scores_Card}
        bgColor="#fdf9f2"
      />
      <StreamLineBuisness
        title="Web Development Services"
        heading="Top Web Development Services"
        description={""}
        DataMapping={Web_Development_Data}
      />
      <MeticulouslyAccordion
        title={"Our Process"}
        dataMapping={Development_Faq}
      />
      <ContactUs />
    </Box>
  );
};

export default page;
