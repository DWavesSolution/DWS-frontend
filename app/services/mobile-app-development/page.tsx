import React from "react";
import { convertSeo } from "@/app/utils/seo";
import { Box } from "@mui/material";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import {
  Mobile_Development_Data,
  Development_Faq,
  Scores_Card,
} from "@/app/static-data/data";
import ContactUs from "@/app/components/contact";
import ServicesBanner from "@/app/components/services_banner";

export async function generateMetadata() {
  const PageTitle = "Expert mobile app development company in canada";
  const PageDescription =
    "Discover top-tier expertise in mobile app development with Canada's leading company. From innovative concepts to flawless execution, trust our experts for unparalleled solutions.";
  const PageKeyword = "Mobile App Development";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <ServicesBanner
        Pagetitle={"Services > Mobile Development"}
        MainHeading={"Are Mobile Development Essential to Business?"}
        description={
          "Having a mobile application for your business is crucial in the age of smartphones. You may engage directly with your customers and take advantage of the large mobile user base by using mobile application development services. Our talented app developers are adept at building feature-rich mobile apps for the iOS and Android operating systems. We collaborate closely with you to comprehend your objectives and create a unique app."
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
        title={"Our Process"}
        dataMapping={Development_Faq}
      />
      <ContactUs />
    </Box>
  );
};

export default page;
