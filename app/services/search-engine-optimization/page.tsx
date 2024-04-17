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
  const PageTitle = "Seo Services in Canada | Best Seo Agency";
  const PageDescription =
    "Boost your online presence in Canada with top-notch SEO services from the best agency. Get more visitors to your website and rank higher on search engines.";
  const PageKeyword = "Digital Wave Solutions";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <ServicesBanner
        Pagetitle={"Services > Search Engine Optimization"}
        MainHeading={"Welcome to Digital Waves Solutions SEO Services."}
        description={
          "In the competitive digital realm, our expertise lies in maximizing your website's visibility, surpassing competitors by elevating search engine rankings. Our seasoned SEO team customizes strategies to align with your business objectives, ensuring sustainable growth through data-driven tactics. As businesses seek to lead, the demand for advanced SEO services has surged; we offer affordable solutions tailored for the USA and Canada markets."
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
      <MeticulouslyAccordion title={"Our Process"} dataMapping={Seo_Faq} />
      <ContactUs />
    </Box>
  );
};

export default page;
