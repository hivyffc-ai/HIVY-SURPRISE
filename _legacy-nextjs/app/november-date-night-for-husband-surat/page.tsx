import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "november-date-night-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "November Date Night For Husband Surat | Seasonal Evening",
  description: keyword?.metaDescription || "Book a November date night for your husband in Surat. Seasonal romantic evening at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/november-date-night-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "November Date Night For Husband Surat | Seasonal Evening",
    description: keyword?.metaDescription || "Book a November date night for your husband in Surat. Seasonal romantic evening at HIVY.",
    url: "https://surprisedatesurat.com/november-date-night-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
