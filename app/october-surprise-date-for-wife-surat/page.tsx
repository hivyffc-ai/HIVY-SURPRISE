import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "october-surprise-date-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "October Surprise Date For Wife Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a October surprise date for your wife in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/october-surprise-date-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "October Surprise Date For Wife Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a October surprise date for your wife in Surat. Seasonal romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/october-surprise-date-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
