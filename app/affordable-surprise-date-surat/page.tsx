import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "affordable-surprise-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Affordable Surprise Date Surat | Budget Couple Setup",
  description: keyword?.metaDescription || "Book affordable surprise date in Surat. Budget-friendly romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/affordable-surprise-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Affordable Surprise Date Surat | Budget Couple Setup",
    description: keyword?.metaDescription || "Book affordable surprise date in Surat. Budget-friendly romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/affordable-surprise-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
