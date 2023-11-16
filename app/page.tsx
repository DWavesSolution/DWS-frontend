import { Box } from "@mui/material";
import HomePage from "./template";
import { convertSeo } from "./utils/seo";

export async function generateMetadata() {
  const PageTitle = "Home Page";
  return convertSeo(PageTitle);
}

export default function Home() {
  return (
    <Box>
      <HomePage />
    </Box>
  );
}
