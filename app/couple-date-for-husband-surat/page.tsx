import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "couple-date-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Couple Date For Husband Surat | Romantic Couple Experience",
  description: keyword?.metaDescription || "Plan a couple date for your husband in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/couple-date-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Couple Date For Husband Surat | Romantic Couple Experience",
    description: keyword?.metaDescription || "Plan a couple date for your husband in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/couple-date-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
