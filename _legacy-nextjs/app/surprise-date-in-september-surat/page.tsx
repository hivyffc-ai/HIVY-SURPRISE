import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-in-september-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Surprise Date in September Surat | Seasonal Couple Experience",
  description: keyword?.metaDescription || "Book surprise date in September in Surat. Seasonal romantic couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/surprise-date-in-september-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Surprise Date in September Surat | Seasonal Couple Experience",
    description: keyword?.metaDescription || "Book surprise date in September in Surat. Seasonal romantic couple experience at HIVY.",
    url: "https://surprisedatesurat.com/surprise-date-in-september-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
