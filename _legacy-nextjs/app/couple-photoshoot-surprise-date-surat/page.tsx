import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "couple-photoshoot-surprise-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Couple Photoshoot Surprise Date Surat | Photo Package",
  description: keyword?.metaDescription || "Book couple photoshoot surprise date in Surat. Complete romantic package at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/couple-photoshoot-surprise-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Couple Photoshoot Surprise Date Surat | Photo Package",
    description: keyword?.metaDescription || "Book couple photoshoot surprise date in Surat. Complete romantic package at HIVY.",
    url: "https://surprisedatesurat.com/couple-photoshoot-surprise-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
