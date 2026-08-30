import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-celebration-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Surprise Celebration For Girlfriend Surat | Romantic Couple Experience",
  description: keyword?.metaDescription || "Plan a surprise celebration for your girlfriend in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/surprise-celebration-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Surprise Celebration For Girlfriend Surat | Romantic Couple Experience",
    description: keyword?.metaDescription || "Plan a surprise celebration for your girlfriend in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/surprise-celebration-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
