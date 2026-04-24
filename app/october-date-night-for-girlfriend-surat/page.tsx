import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "october-date-night-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "October Date Night For Girlfriend Surat | Seasonal Evening",
  description: keyword?.metaDescription || "Book a October date night for your girlfriend in Surat. Seasonal romantic evening at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/october-date-night-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "October Date Night For Girlfriend Surat | Seasonal Evening",
    description: keyword?.metaDescription || "Book a October date night for your girlfriend in Surat. Seasonal romantic evening at HIVY.",
    url: "https://surprisedatesurat.com/october-date-night-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
