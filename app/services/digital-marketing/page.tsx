import React from "react";
import { convertSeo } from "@/app/utils/seo";
import { Box } from "@mui/material";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import {
  Digital_Marketing_Data,
  Digital_Marketing_Faq,
  Scores_Card,
} from "@/app/static-data/data";
import SeoSubcription from "@/app/components/seo-subcription";
import ContactUs from "@/app/components/contact";
import ServicesBanner from "@/app/components/services_banner";

export async function generateMetadata() {
  const PageTitle = "Expert digital marketing agency in canada";
  const PageDescription =
    "Elevate your brand's online presence with Canada's premier digital marketing agency. Our expert team crafts tailored strategies for success in today's digital landscape.";
  const PageKeyword = "Digital Marketing";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <ServicesBanner
        Pagetitle={"Services > Digital Marketing"}
        MainHeading={"Are Digital and Digital Marketing Essential to Business?"}
        description={
          "Yes. Digital and social media marketing are critical components of online success. Although digital and social media marketing strategies vary, these marketing tactics share the same goals: to boost brand awareness and drive more revenue."
        }
        dataMapping={Scores_Card}
        bgColor="#f2fbf5"
      />
      <StreamLineBuisness
        title="Digital Marketing Services"
        heading="A TOP DIGITAL MARKETING COMPANY"
        description={
          "We create and manage top-performing social media campaigns for businesses. Our company does this by managing social media networks such as Facebook, Instagram, Twitter, LinkedIn and Pinterest on your behalf. In short, we use relevant social media marketing services to help businesses grow and meet their goals, and because we’re a full service agency that also offers the other digital marketing services mentioned, we’re able to intertwine those services to support your social media efforts and vice versa for maximum results!"
        }
        DataMapping={Digital_Marketing_Data}
      />
      <SeoSubcription />
      <MeticulouslyAccordion
        title="Our Process"
        dataMapping={Digital_Marketing_Faq}
      />
      <ContactUs />
    </Box>
  );
};

export default page;
