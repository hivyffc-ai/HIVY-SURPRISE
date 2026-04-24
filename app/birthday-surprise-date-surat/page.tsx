import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "birthday-surprise-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Surprise Date Surat | Romantic Celebration",
  description: keyword?.metaDescription || "Plan a birthday surprise date in Surat. Exclusive couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/birthday-surprise-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Surprise Date Surat | Romantic Celebration",
    description: keyword?.metaDescription || "Plan a birthday surprise date in Surat. Exclusive couple experience at HIVY.",
    url: "https://surprisedatesurat.com/birthday-surprise-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
