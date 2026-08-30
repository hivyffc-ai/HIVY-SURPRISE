import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "date-night-with-candles-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Date Night With Candles Surat | Romantic Couple Night",
  description: keyword?.metaDescription || "Plan a date night with candles in Surat. Romantic couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/date-night-with-candles-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Date Night With Candles Surat | Romantic Couple Night",
    description: keyword?.metaDescription || "Plan a date night with candles in Surat. Romantic couple experience at HIVY.",
    url: "https://surprisedatesurat.com/date-night-with-candles-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
