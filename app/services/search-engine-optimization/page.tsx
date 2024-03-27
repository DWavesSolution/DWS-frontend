import React from "react";
import { convertSeo } from "@/app/utils/seo";
import { Box } from "@mui/material";
import WHYDWS from "@/app/components/why-DWS";
import MeticulouslyAccordion from "@/app/components/meticulously-accordion";
import SeoPackages from "@/app/components/seo-packages";
import { Scores_Card, Seo_Faq, Why_SEO } from "@/app/static-data/data";
import ContactUs from "@/app/components/contact";
import ServicesBanner from "../../components/services_banner";

export async function generateMetadata() {
  const PageTitle = "Search Engine Optimization";
  const PageDescription =
    "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.";
  const PageKeyword = "Digital Marketing Company";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <ServicesBanner
        Pagetitle={"Services > Search Engine Optimization"}
        MainHeading={"Welcome to Digital Waves Solutions SEO Services."}
        description={
          "In the digital landscape, where visibility is key, we specialize in optimizing your website to not only rank higher on search engines but also to outshine your competitors. Our team of seasoned SEO experts is dedicated to understanding your unique business goals and tailoring our services to meet your specific needs. With a data-driven approach and a focus on sustainable results, we ensure that your online presence not only improves but thrives. As businesses strive to stay ahead, the demand for advanced SEO services has surged. we provide you a cheap and affordable SEO services in USA and Canada."
        }
        dataMapping={Scores_Card}
        bgColor="#e9f5fe"
      />
      <SeoPackages />
      <WHYDWS
        title=""
        heading="Why Choose Digital Wave Solution for SEO Services?"
        description=""
        DataMapping={Why_SEO}
      />
      <MeticulouslyAccordion
        title={"Frequently Ask Questions"}
        dataMapping={Seo_Faq}
      />
      <ContactUs />
    </Box>
  );
};

export default page;
