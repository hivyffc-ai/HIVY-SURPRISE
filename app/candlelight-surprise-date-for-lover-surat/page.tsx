import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-surprise-date-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Surprise Date For Lover Surat | Private Setup",
  description: keyword?.metaDescription || "Plan a candlelight surprise date for your lover in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/candlelight-surprise-date-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Surprise Date For Lover Surat | Private Setup",
    description: keyword?.metaDescription || "Plan a candlelight surprise date for your lover in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/candlelight-surprise-date-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
