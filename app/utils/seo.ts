export const convertSeo = (
  PageTitle?: any,
  PageDescription?: any,
  PageKeyword?: any
) => {
  return {
    title: `${PageTitle}`,
    description:
      `${PageDescription}` ||
      "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.",
    publisher: "Digital Wave Solutions",
    keywords: `${PageKeyword}` || "Digital Wave Solutions",
    robots: "index, follow, max-image-preview:large",
    // viewport: "width=device-width, initial-scale=1.0",
    authors: [
      {
        url: "https://digitalwavesolutions.ca/",
      },
    ],
    alternates: {
      canonical: "https://digitalwavesolutions.ca/",
    },
    openGraph: {
      type: "website",
      title: "Digital Wave Solutions",
      description:
        "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
      description:
        "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.",
      title: "Digital Wave Solutions",
      domain: "https://digitalwavesolutions.ca/",
      images: [
        {
          url: "",
          alt: "DWS metaImage",
          secureUrl: "",
          type: "image",
        },
      ],
    },
  };
};
