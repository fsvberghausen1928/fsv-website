import type { Metadata } from "next";


interface SEOOptions {

  title: string;

  description: string;

  image?: string;

  url?: string;

}



const SITE_NAME =
  "FSV Berghausen 1928";


const SITE_URL =
  "https://www.fsvberghausen1928.de";





export function createSEO({
  title,
  description,
  image = "/images/og-image.jpg",
  url = SITE_URL,
}: SEOOptions): Metadata {


  return {

    title: `${title} | ${SITE_NAME}`,



    description,



    metadataBase:
      new URL(SITE_URL),



    openGraph: {

      title,

      description,

      url,

      siteName:
        SITE_NAME,

      locale:
        "de_DE",

      type:
        "website",



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





export function createCanonicalUrl(
  path: string
): string {

  return `${SITE_URL}${path}`;

}