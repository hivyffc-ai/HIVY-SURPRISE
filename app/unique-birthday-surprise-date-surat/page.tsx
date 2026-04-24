import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "unique-birthday-surprise-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Unique Birthday Surprise Date Surat | Romantic Setup",
  description: keyword?.metaDescription || "Plan a unique birthday surprise date in Surat. Romantic couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/unique-birthday-surprise-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Unique Birthday Surprise Date Surat | Romantic Setup",
    description: keyword?.metaDescription || "Plan a unique birthday surprise date in Surat. Romantic couple experience at HIVY.",
    url: "https://surprisedatesurat.com/unique-birthday-surprise-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
