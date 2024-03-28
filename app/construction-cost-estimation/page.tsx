import React from "react";
import CostEstimation from "./template";
import { convertSeo } from "../utils/seo";
export async function generateMetadata() {
  const PageTitle = "Construction Cost Estimation";
  const PageDescription = "";
  const PageKeyword = "Construction Cost Estimation";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}
const page = () => {
  return <CostEstimation />;
};

export default page;
