import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "june-date-night-for-boyfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "June Date Night For Boyfriend Surat | Seasonal Evening",
  description: keyword?.metaDescription || "Book a June date night for your boyfriend in Surat. Seasonal romantic evening at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/june-date-night-for-boyfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "June Date Night For Boyfriend Surat | Seasonal Evening",
    description: keyword?.metaDescription || "Book a June date night for your boyfriend in Surat. Seasonal romantic evening at HIVY.",
    url: "https://surprisedatesurat.com/june-date-night-for-boyfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
