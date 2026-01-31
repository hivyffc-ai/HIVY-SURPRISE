/**
 * MAIN PAGE - HIVY SURPRISE DATE - SURAT
 * The main home page for HIVY Surprise Date - 100% Surprise Date Focused
 */

import { Metadata } from "next";
import FFCHomePage from "@/components/ffc-home-page";
import { siteConfig } from "@/lib/ffc-config";

// Dynamic metadata for HIVY Surprise Date
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${siteConfig.name} | Best Surprise Date Setup & Romantic Date Experiences in Surat`,
    description: `${siteConfig.tagline}. Surat's #1 surprise date venue for couples. Book romantic surprise dates for boyfriend, girlfriend, husband, or wife. Private rooftop setups, candlelit ambiance, and unforgettable experiences. 4.9★ rating.`,
    keywords: [
      'surprise date surat',
      'surprise date for boyfriend surat',
      'surprise date for girlfriend surat',
      'surprise date for husband surat',
      'surprise date for wife surat',
      'romantic surprise date surat',
      'surprise date ideas surat',
      'surprise date planners surat',
      'surprise date setup surat',
      'surprise date places surat',
      'surprise date night surat',
      'unique date ideas surat',
      'special date surat',
      'couple date surat',
      'romantic date surat',
      'private date setup surat',
      'rooftop date surat',
      'intimate date experience surat',
      'luxury date surat',
      'creative date ideas surat',
      'first date setup surat',
      'monthly anniversary date surat',
      'midnight surprise date surat',
      'sunset date surat',
      'weekend date ideas surat',
      'private cabin date surat',
      'outdoor date ideas surat',
      'indoor date setup surat',
      'stargazing date surat',
      'movie date setup surat'
    ],
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `${siteConfig.name} | Romantic Surprise Dates`,
      description: siteConfig.tagline,
      url: siteConfig.website,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
  };
}

export default function Home() {
  return <FFCHomePage />;
}