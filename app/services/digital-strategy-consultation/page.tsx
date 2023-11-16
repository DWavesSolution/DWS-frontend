import React from "react";
import DigitalStrategyConsultation from "./template";
import { convertSeo } from "@/app/utils/seo";

export async function generateMetadata() {
  const PageTitle = "Digital Strategy Consultation";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <div>
      <DigitalStrategyConsultation />
    </div>
  );
};

export default page;
