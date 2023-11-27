import React from "react";
import SocialMediaMarketing from "./template";
import { convertSeo } from "@/app/utils/seo";
import { Box } from "@mui/material";
import Testimonials from "@/app/components/testimonials";
import OurPromise from "@/app/components/promise";
import StreamLineBuisness from "@/app/components/streamline-buisness";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import { Social_Media_Data } from "@/app/static-data/data";
import SeoSubcription from "@/app/components/seo-subcription";

export async function generateMetadata() {
  const PageTitle = "Social Media Marketing";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <Box>
      <SocialMediaMarketing />
      <StreamLineBuisness
        title="Social Media Marketing Services"
        heading="A TOP SOCIAL MEDIA MARKETING COMPANY"
        description={
          "We create and manage top-performing social media campaigns for businesses. Our company does this by managing social media networks such as Facebook, Instagram, Twitter, LinkedIn and Pinterest on your behalf. In short, we use relevant social media marketing services to help businesses grow and meet their goals, and because we’re a full service agency that also offers the other digital marketing services mentioned, we’re able to intertwine those services to support your social media efforts and vice versa for maximum results!"
        }
        DataMapping={Social_Media_Data}
      />
      <Testimonials />
      <SeoSubcription />
      <MeticulouslyAccordion />
      <OurPromise />
    </Box>
  );
};

export default page;
