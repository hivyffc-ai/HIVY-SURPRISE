import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-for-karwa-chauth-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Surprise Date for Karwa Chauth Surat | Romantic Setup",
  description: keyword?.metaDescription || "Book a surprise date for karwa chauth in Surat. Romantic private setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/surprise-date-for-karwa-chauth-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Surprise Date for Karwa Chauth Surat | Romantic Setup",
    description: keyword?.metaDescription || "Book a surprise date for karwa chauth in Surat. Romantic private setup at HIVY.",
    url: "https://surprisedatesurat.com/surprise-date-for-karwa-chauth-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
