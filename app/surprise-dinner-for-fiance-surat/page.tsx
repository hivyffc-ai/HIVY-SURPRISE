import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-dinner-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Surprise Dinner For Fiance Surat | Romantic Couple Experience",
  description: keyword?.metaDescription || "Plan a surprise dinner for your fiance in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/surprise-dinner-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Surprise Dinner For Fiance Surat | Romantic Couple Experience",
    description: keyword?.metaDescription || "Plan a surprise dinner for your fiance in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/surprise-dinner-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
