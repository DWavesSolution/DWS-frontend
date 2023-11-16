import React from "react";
import StaffAugmentation from "./template";
import { convertSeo } from "@/app/utils/seo";

export async function generateMetadata() {
  const PageTitle = "Staff Augmentation";
  return convertSeo(PageTitle);
}
const page = () => {
  return (
    <div>
      <StaffAugmentation />
    </div>
  );
};

export default page;
