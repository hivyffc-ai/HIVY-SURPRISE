import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "july-date-night-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "July Date Night For Soulmate Surat | Seasonal Evening",
  description: keyword?.metaDescription || "Book a July date night for your soulmate in Surat. Seasonal romantic evening at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/july-date-night-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "July Date Night For Soulmate Surat | Seasonal Evening",
    description: keyword?.metaDescription || "Book a July date night for your soulmate in Surat. Seasonal romantic evening at HIVY.",
    url: "https://surprisedatesurat.com/july-date-night-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
