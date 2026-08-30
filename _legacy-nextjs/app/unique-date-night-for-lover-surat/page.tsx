import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "unique-date-night-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Unique Date Night For Lover Surat | Romantic Evening",
  description: keyword?.metaDescription || "Book a unique date night for your lover in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/unique-date-night-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Unique Date Night For Lover Surat | Romantic Evening",
    description: keyword?.metaDescription || "Book a unique date night for your lover in Surat. Romantic private experience at HIVY.",
    url: "https://surprisedatesurat.com/unique-date-night-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
