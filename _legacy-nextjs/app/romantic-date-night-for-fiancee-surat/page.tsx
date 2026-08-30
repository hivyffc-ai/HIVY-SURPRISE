import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "romantic-date-night-for-fiancee-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Date Night For Fiancee Surat | Romantic Evening",
  description: keyword?.metaDescription || "Book a romantic date night for your fiancee in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/romantic-date-night-for-fiancee-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Date Night For Fiancee Surat | Romantic Evening",
    description: keyword?.metaDescription || "Book a romantic date night for your fiancee in Surat. Romantic private experience at HIVY.",
    url: "https://surprisedatesurat.com/romantic-date-night-for-fiancee-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
