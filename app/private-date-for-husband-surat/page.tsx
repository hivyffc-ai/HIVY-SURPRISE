import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "private-date-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Date For Husband Surat | Romantic Couple Experience",
  description: keyword?.metaDescription || "Plan a private date for your husband in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/private-date-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Date For Husband Surat | Romantic Couple Experience",
    description: keyword?.metaDescription || "Plan a private date for your husband in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/private-date-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
