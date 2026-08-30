import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "december-date-night-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "December Date Night For Better Half Surat | Seasonal Evening",
  description: keyword?.metaDescription || "Book a December date night for your better half in Surat. Seasonal romantic evening at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/december-date-night-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "December Date Night For Better Half Surat | Seasonal Evening",
    description: keyword?.metaDescription || "Book a December date night for your better half in Surat. Seasonal romantic evening at HIVY.",
    url: "https://surprisedatesurat.com/december-date-night-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
