import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "garden-surprise-date-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Garden Surprise Date For Wife Surat | Private Setup",
  description: keyword?.metaDescription || "Book garden surprise date for your wife in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/garden-surprise-date-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Garden Surprise Date For Wife Surat | Private Setup",
    description: keyword?.metaDescription || "Book garden surprise date for your wife in Surat. Romantic private experience at HIVY.",
    url: "https://surprisedatesurat.com/garden-surprise-date-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
