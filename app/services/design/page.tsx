import React from "react";
import { convertSeo } from "@/app/utils/seo";
import { Box } from "@mui/material";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import { Design_Data, Scores_Card } from "@/app/static-data/data";
import ContactUs from "@/app/components/contact";
import ServicesBanner from "@/app/components/services_banner";

export async function generateMetadata() {
  const PageTitle = "Expert Design Marketing";
  const PageDescription =
    "Elevate your brand with our tailored design packages. Boost engagement, reach, and results with cost-effective solutions for every business";
  const PageKeyword = "Digital Marketing";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <ServicesBanner
        Pagetitle={"Services > Design"}
        MainHeading={"Are Designs Essential to Business?"}
        description={
          "Yes. Design are critical components of online success. Although digital and design strategies vary, these marketing tactics share the same goals: to boost brand awareness and drive more revenue."
        }
        dataMapping={Scores_Card}
        bgColor="#fff3f2"
      />
      <StreamLineBuisness
        title="Design Services"
        heading="TOP Design Services"
        description={
          "We create and manage top-performing social media campaigns for businesses. Our company does this by managing social media networks such as Facebook, Instagram, Twitter, LinkedIn and Pinterest on your behalf. In short, we use relevant design services to help businesses grow and meet their goals, and because we’re a full service agency that also offers the other digital marketing services mentioned, we’re able to intertwine those services to support your social media efforts and vice versa for maximum results!"
        }
        DataMapping={Design_Data}
      />
      <MeticulouslyAccordion />
      <ContactUs />
    </Box>
  );
};

export default page;
