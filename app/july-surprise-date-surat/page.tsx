import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "july-surprise-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "July Surprise Date Surat | Seasonal Romantic Setup",
  description: keyword?.metaDescription || "Plan a July surprise date in Surat. Seasonal romantic private setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/july-surprise-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "July Surprise Date Surat | Seasonal Romantic Setup",
    description: keyword?.metaDescription || "Plan a July surprise date in Surat. Seasonal romantic private setup at HIVY.",
    url: "https://surprisedatesurat.com/july-surprise-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
