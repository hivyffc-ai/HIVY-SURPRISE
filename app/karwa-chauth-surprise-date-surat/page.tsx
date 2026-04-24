import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "karwa-chauth-surprise-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Karwa Chauth Surprise Date Surat | Romantic Celebration",
  description: keyword?.metaDescription || "Plan a karwa chauth surprise date in Surat. Exclusive couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/karwa-chauth-surprise-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Karwa Chauth Surprise Date Surat | Romantic Celebration",
    description: keyword?.metaDescription || "Plan a karwa chauth surprise date in Surat. Exclusive couple experience at HIVY.",
    url: "https://surprisedatesurat.com/karwa-chauth-surprise-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
