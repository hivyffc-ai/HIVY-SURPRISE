import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "romantic-surprise-date-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Surprise Date For Better Half Surat | Private Setup",
  description: keyword?.metaDescription || "Plan a romantic surprise date for your better-half in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/romantic-surprise-date-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Surprise Date For Better Half Surat | Private Setup",
    description: keyword?.metaDescription || "Plan a romantic surprise date for your better-half in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/romantic-surprise-date-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
