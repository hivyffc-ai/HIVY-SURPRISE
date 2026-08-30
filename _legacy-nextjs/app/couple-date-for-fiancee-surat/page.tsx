import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "couple-date-for-fiancee-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Couple Date For Fiancee Surat | Romantic Couple Experience",
  description: keyword?.metaDescription || "Plan a couple date for your fiancee in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/couple-date-for-fiancee-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Couple Date For Fiancee Surat | Romantic Couple Experience",
    description: keyword?.metaDescription || "Plan a couple date for your fiancee in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/couple-date-for-fiancee-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
