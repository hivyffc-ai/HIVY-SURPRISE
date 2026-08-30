import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "december-surprise-date-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "December Surprise Date For Better Half Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a December surprise date for your better half in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/december-surprise-date-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "December Surprise Date For Better Half Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a December surprise date for your better half in Surat. Seasonal romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/december-surprise-date-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
