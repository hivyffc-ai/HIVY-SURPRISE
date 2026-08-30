import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "outdoor-surprise-date-in-october-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Outdoor Surprise Date October Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Book a outdoor surprise date in October in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/outdoor-surprise-date-in-october-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Outdoor Surprise Date October Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Book a outdoor surprise date in October in Surat. Seasonal romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/outdoor-surprise-date-in-october-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
