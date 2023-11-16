import React from "react";
import PortfolioPage from "./template";
import { convertSeo } from "../utils/seo";

export async function generateMetadata() {
  const PageTitle = "Portfolio";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <div>
      <PortfolioPage />
    </div>
  );
};

export default page;
