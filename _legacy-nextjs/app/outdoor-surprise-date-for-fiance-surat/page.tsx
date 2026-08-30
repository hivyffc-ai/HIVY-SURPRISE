import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "outdoor-surprise-date-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Outdoor Surprise Date For Fiance Surat | Private Setup",
  description: keyword?.metaDescription || "Plan a outdoor surprise date for your fiance in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/outdoor-surprise-date-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Outdoor Surprise Date For Fiance Surat | Private Setup",
    description: keyword?.metaDescription || "Plan a outdoor surprise date for your fiance in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/outdoor-surprise-date-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
