import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-under-stars-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Surprise Date Under Stars Surat | Exclusive Couple Venue",
  description: keyword?.metaDescription || "Book surprise date under stars in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/surprise-date-under-stars-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Surprise Date Under Stars Surat | Exclusive Couple Venue",
    description: keyword?.metaDescription || "Book surprise date under stars in Surat. Private couple experience at HIVY.",
    url: "https://surprisedatesurat.com/surprise-date-under-stars-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
