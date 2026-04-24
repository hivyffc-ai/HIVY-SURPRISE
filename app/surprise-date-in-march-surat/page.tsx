import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-in-march-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Surprise Date in March Surat | Seasonal Couple Experience",
  description: keyword?.metaDescription || "Book surprise date in March in Surat. Seasonal romantic couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/surprise-date-in-march-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Surprise Date in March Surat | Seasonal Couple Experience",
    description: keyword?.metaDescription || "Book surprise date in March in Surat. Seasonal romantic couple experience at HIVY.",
    url: "https://surprisedatesurat.com/surprise-date-in-march-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
