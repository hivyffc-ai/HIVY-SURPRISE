import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-with-balloons-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Surprise Date With Balloons Surat | Complete Package",
  description: keyword?.metaDescription || "Book surprise date with balloons in Surat. Complete romantic package at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/surprise-date-with-balloons-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Surprise Date With Balloons Surat | Complete Package",
    description: keyword?.metaDescription || "Book surprise date with balloons in Surat. Complete romantic package at HIVY.",
    url: "https://surprisedatesurat.com/surprise-date-with-balloons-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
