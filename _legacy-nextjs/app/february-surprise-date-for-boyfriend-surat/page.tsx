import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "february-surprise-date-for-boyfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "February Surprise Date For Boyfriend Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a February surprise date for your boyfriend in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/february-surprise-date-for-boyfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "February Surprise Date For Boyfriend Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a February surprise date for your boyfriend in Surat. Seasonal romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/february-surprise-date-for-boyfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
