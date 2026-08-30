import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "date-night-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Date Night For Wife Surat | Romantic Couple Experience",
  description: keyword?.metaDescription || "Plan a date night for your wife in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/date-night-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Date Night For Wife Surat | Romantic Couple Experience",
    description: keyword?.metaDescription || "Plan a date night for your wife in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/date-night-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
