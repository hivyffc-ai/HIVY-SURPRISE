import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-surprise-date-in-august-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Surprise Date August Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Book a candlelight surprise date in August in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/candlelight-surprise-date-in-august-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Surprise Date August Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Book a candlelight surprise date in August in Surat. Seasonal romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/candlelight-surprise-date-in-august-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
