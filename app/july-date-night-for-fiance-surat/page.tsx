import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "july-date-night-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "July Date Night For Fiance Surat | Seasonal Evening",
  description: keyword?.metaDescription || "Book a July date night for your fiance in Surat. Seasonal romantic evening at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/july-date-night-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "July Date Night For Fiance Surat | Seasonal Evening",
    description: keyword?.metaDescription || "Book a July date night for your fiance in Surat. Seasonal romantic evening at HIVY.",
    url: "https://surprisedatesurat.com/july-date-night-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
