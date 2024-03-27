import React from "react";
import { convertSeo } from "@/app/utils/seo";
import { Box } from "@mui/material";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import { Mobile_Development_Data, Mobile_Development_Faq, Scores_Card } from "@/app/static-data/data";
import ContactUs from "@/app/components/contact";
import ServicesBanner from "@/app/components/services_banner";

export async function generateMetadata() {
  const PageTitle = "Expert Mobile Development Packages";
  const PageDescription =
    "Elevate your brand with our tailored social media marketing packages. Boost engagement, reach, and results with cost-effective solutions for every business";
  const PageKeyword = "Mobile Development";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <ServicesBanner
        Pagetitle={"Services > Mobile Development"}
        MainHeading={"Are Mobile Development Essential to Business?"}
        description={
          "Yes. Digital and social media marketing are critical components of online success. Although digital and social media marketing strategies vary, these marketing tactics share the same goals: to boost brand awareness and drive more revenue."
        }
        dataMapping={Scores_Card}
        bgColor="#faf1f7"
      />
      <StreamLineBuisness
        title="Mobile Development Services"
        heading="Top Mobile Development Services"
        description={""}
        DataMapping={Mobile_Development_Data}
      />
      <MeticulouslyAccordion
        title={"Frequently Ask Questions"}
        dataMapping={Mobile_Development_Faq}
      />
      <ContactUs />
    </Box>
  );
};

export default page;
