import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "magical-surprise-date-in-november-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Magical Surprise Date November Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Book a magical surprise date in November in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/magical-surprise-date-in-november-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Magical Surprise Date November Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Book a magical surprise date in November in Surat. Seasonal romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/magical-surprise-date-in-november-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
