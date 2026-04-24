import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "december-date-night-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "December Date Night For Lover Surat | Seasonal Evening",
  description: keyword?.metaDescription || "Book a December date night for your lover in Surat. Seasonal romantic evening at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/december-date-night-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "December Date Night For Lover Surat | Seasonal Evening",
    description: keyword?.metaDescription || "Book a December date night for your lover in Surat. Seasonal romantic evening at HIVY.",
    url: "https://surprisedatesurat.com/december-date-night-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
