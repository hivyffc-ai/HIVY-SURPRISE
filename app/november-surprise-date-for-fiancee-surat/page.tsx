import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "november-surprise-date-for-fiancee-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "November Surprise Date For Fiancee Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a November surprise date for your fiancee in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/november-surprise-date-for-fiancee-surat" },
  openGraph: {
    title: keyword?.metaTitle || "November Surprise Date For Fiancee Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a November surprise date for your fiancee in Surat. Seasonal romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/november-surprise-date-for-fiancee-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
