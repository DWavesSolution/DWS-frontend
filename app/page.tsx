import { Box } from "@mui/material";
import HomePage from "./template";
import { convertSeo } from "./utils/seo";

export async function generateMetadata() {
  const PageTitle = "Affordable Digital Marketing Company";
  const PageDescription =
    "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.";
  const PageKeyword = "Digital Marketing Company";
  return convertSeo(PageTitle, PageDescription, PageKeyword);
}

export default function Home() {
  return <HomePage />;
}
