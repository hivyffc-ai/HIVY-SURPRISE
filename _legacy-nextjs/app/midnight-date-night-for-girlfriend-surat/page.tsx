import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "midnight-date-night-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Midnight Date Night For Girlfriend Surat | Romantic Evening",
  description: keyword?.metaDescription || "Book a midnight date night for your girlfriend in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/midnight-date-night-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Midnight Date Night For Girlfriend Surat | Romantic Evening",
    description: keyword?.metaDescription || "Book a midnight date night for your girlfriend in Surat. Romantic private experience at HIVY.",
    url: "https://surprisedatesurat.com/midnight-date-night-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
