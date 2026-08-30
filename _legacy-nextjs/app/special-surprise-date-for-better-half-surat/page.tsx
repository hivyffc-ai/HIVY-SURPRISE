import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "special-surprise-date-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Special Surprise Date For Better Half Surat | Private Setup",
  description: keyword?.metaDescription || "Plan a special surprise date for your better-half in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/special-surprise-date-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Special Surprise Date For Better Half Surat | Private Setup",
    description: keyword?.metaDescription || "Plan a special surprise date for your better-half in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/special-surprise-date-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
