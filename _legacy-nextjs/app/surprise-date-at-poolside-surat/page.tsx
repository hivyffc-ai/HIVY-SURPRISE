import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-at-poolside-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Surprise Date At Poolside Surat | Exclusive Couple Venue",
  description: keyword?.metaDescription || "Book surprise date at poolside in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/surprise-date-at-poolside-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Surprise Date At Poolside Surat | Exclusive Couple Venue",
    description: keyword?.metaDescription || "Book surprise date at poolside in Surat. Private couple experience at HIVY.",
    url: "https://surprisedatesurat.com/surprise-date-at-poolside-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
