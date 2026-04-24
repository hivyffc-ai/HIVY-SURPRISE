import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "luxury-date-night-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Luxury Date Night For Soulmate Surat | Romantic Evening",
  description: keyword?.metaDescription || "Book a luxury date night for your soulmate in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/luxury-date-night-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Luxury Date Night For Soulmate Surat | Romantic Evening",
    description: keyword?.metaDescription || "Book a luxury date night for your soulmate in Surat. Romantic private experience at HIVY.",
    url: "https://surprisedatesurat.com/luxury-date-night-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
