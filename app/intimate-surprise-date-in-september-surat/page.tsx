import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "intimate-surprise-date-in-september-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Intimate Surprise Date September Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Book a intimate surprise date in September in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/intimate-surprise-date-in-september-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Intimate Surprise Date September Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Book a intimate surprise date in September in Surat. Seasonal romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/intimate-surprise-date-in-september-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
