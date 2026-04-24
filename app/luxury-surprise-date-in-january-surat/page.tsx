import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "luxury-surprise-date-in-january-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Luxury Surprise Date January Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Book a luxury surprise date in January in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/luxury-surprise-date-in-january-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Luxury Surprise Date January Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Book a luxury surprise date in January in Surat. Seasonal romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/luxury-surprise-date-in-january-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
