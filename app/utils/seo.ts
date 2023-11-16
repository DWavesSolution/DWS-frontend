export const convertSeo = (PageTitle: any) => {
  return {
    title: `${PageTitle} - Digital Waves Solution` || "Digital Waves Solution",
    description:
      "Digital Waves Solutions help businesses grow by providing services in web and app development, UI/UX, cloud services, Artificial intelligence, and more.",
    publisher: "Digital Waves Solution",
    keywords: "Digital Waves Solution",
    robots: "index, follow, max-image-preview:large",
    // viewport: "width=device-width, initial-scale=1.0",
    authors: [
      {
        url: "",
      },
    ],
    alternates: {
      canonical: "",
    },
    openGraph: {
      type: "website",
      title: "Digital Waves Solution",
      description:
        "Digital Waves Solutions help businesses grow by providing services in web and app development, UI/UX, cloud services, Artificial intelligence, and more.",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
      description:
        "Digital Waves Solutions help businesses grow by providing services in web and app development, UI/UX, cloud services, Artificial intelligence, and more.",
      title: "Digital Waves Solution",
      domain: "",
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
