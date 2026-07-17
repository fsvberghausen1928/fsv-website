import type { Metadata } from "next";



interface MetadataOptions {

  title: string;

  description?: string;

  image?: string;

  url?: string;

}





const siteName =
  "FSV Berghausen 1928";



const siteUrl =
  "https://www.fsvberghausen1928.de";





export function generateMetadata({
  title,
  description =
    "Offizielle Website des FSV Berghausen 1928.",
  image =
    "/images/og-image.jpg",
  url = siteUrl,
}: MetadataOptions): Metadata {


  return {

    title: {
      absolute:
        `${title} | ${siteName}`,
    },



    description,



    openGraph: {

      title,

      description,

      url,

      siteName,

      type: "website",



      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],

    },



    twitter: {

      card:
        "summary_large_image",



      title,



      description,



      images: [
        image,
      ],

    },

  };

}