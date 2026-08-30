import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "magical-date-night-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Magical Date Night For Better Half Surat | Romantic Evening",
  description: keyword?.metaDescription || "Book a magical date night for your better-half in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/magical-date-night-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Magical Date Night For Better Half Surat | Romantic Evening",
    description: keyword?.metaDescription || "Book a magical date night for your better-half in Surat. Romantic private experience at HIVY.",
    url: "https://surprisedatesurat.com/magical-date-night-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
