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
    publisher: "Digital Marketing Company",
    keywords: `${PageKeyword}` || "Digital Marketing Company",
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
      title: "Digital Marketing Company",
      description:
        "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
      description:
        "Discover success with our best affordable digital marketing company. Tailored solutions, expert strategies, and cost-effective services for your business growth.",
      title: "Digital Marketing Company",
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
