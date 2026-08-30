import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "teddy-day-surprise-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Teddy Day Surprise Date Surat | Romantic Celebration",
  description: keyword?.metaDescription || "Plan a teddy day surprise date in Surat. Exclusive couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/teddy-day-surprise-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Teddy Day Surprise Date Surat | Romantic Celebration",
    description: keyword?.metaDescription || "Plan a teddy day surprise date in Surat. Exclusive couple experience at HIVY.",
    url: "https://surprisedatesurat.com/teddy-day-surprise-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
