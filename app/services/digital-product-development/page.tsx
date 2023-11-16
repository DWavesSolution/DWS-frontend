import React from "react";
import DigitalProductDevelopment from "./template";
import { convertSeo } from "@/app/utils/seo";

export async function generateMetadata() {
  const PageTitle = "Digital Product Development";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <div>
      <DigitalProductDevelopment />
    </div>
  );
};

export default page;
