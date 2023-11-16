import React from "react";
import DataAnalyticsAndManagement from "./template";
import { convertSeo } from "@/app/utils/seo";

export async function generateMetadata() {
  const PageTitle = "Data Analytics And Management";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <div>
      <DataAnalyticsAndManagement />
    </div>
  );
};

export default page;
