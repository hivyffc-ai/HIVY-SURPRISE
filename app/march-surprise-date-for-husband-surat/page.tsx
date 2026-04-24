import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "march-surprise-date-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "March Surprise Date For Husband Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a March surprise date for your husband in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/march-surprise-date-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "March Surprise Date For Husband Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a March surprise date for your husband in Surat. Seasonal romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/march-surprise-date-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
