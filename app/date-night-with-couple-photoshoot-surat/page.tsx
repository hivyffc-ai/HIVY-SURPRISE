import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "date-night-with-couple-photoshoot-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Date Night With Couple Photoshoot Surat | Romantic Couple Night",
  description: keyword?.metaDescription || "Plan a date night with couple photoshoot in Surat. Romantic couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/date-night-with-couple-photoshoot-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Date Night With Couple Photoshoot Surat | Romantic Couple Night",
    description: keyword?.metaDescription || "Plan a date night with couple photoshoot in Surat. Romantic couple experience at HIVY.",
    url: "https://surprisedatesurat.com/date-night-with-couple-photoshoot-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
