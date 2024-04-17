import React from "react";
import CostEstimation from "./template";
import { convertSeo } from "../../utils/seo";
import { Box } from "@mui/material";
import { Scores_Card } from "@/app/static-data/data";
import ServicesBanner from "@/app/components/services_banner";
import ContactUs from "@/app/components/contact";

export async function generateMetadata() {
  const PageTitle = "Construction Cost Estimation";
  const PageDescription = "";
  const PageKeyword = "Construction Cost Estimation";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return (
    <Box>
      <ServicesBanner
        Pagetitle={"Services > Construction Cost Estimation"}
        MainHeading={"Want to Know About Construction Cost Estimation?"}
        description={
          "Construction cost estimation is the process of predicting the expenses involved in constructing a building or completing a project, achieved through assessing materials, labor, equipment, and other factors to determine a projected budget. It is crucial for effective project planning, budgeting, and resource management."
        }
        dataMapping={Scores_Card}
        bgColor="#fff3f2"
      />
      <CostEstimation />
      <ContactUs />
    </Box>
  );
};

export default page;
