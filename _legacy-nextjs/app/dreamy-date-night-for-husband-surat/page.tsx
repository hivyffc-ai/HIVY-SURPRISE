import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "dreamy-date-night-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Dreamy Date Night For Husband Surat | Romantic Evening",
  description: keyword?.metaDescription || "Book a dreamy date night for your husband in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/dreamy-date-night-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Dreamy Date Night For Husband Surat | Romantic Evening",
    description: keyword?.metaDescription || "Book a dreamy date night for your husband in Surat. Romantic private experience at HIVY.",
    url: "https://surprisedatesurat.com/dreamy-date-night-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
