import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "magical-surprise-date-for-fiancee-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Magical Surprise Date For Fiancee Surat | Private Setup",
  description: keyword?.metaDescription || "Plan a magical surprise date for your fiancee in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/magical-surprise-date-for-fiancee-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Magical Surprise Date For Fiancee Surat | Private Setup",
    description: keyword?.metaDescription || "Plan a magical surprise date for your fiancee in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/magical-surprise-date-for-fiancee-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
