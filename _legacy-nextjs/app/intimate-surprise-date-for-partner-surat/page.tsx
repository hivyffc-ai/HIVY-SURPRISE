import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "intimate-surprise-date-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Intimate Surprise Date For Partner Surat | Private Setup",
  description: keyword?.metaDescription || "Plan a intimate surprise date for your partner in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/intimate-surprise-date-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Intimate Surprise Date For Partner Surat | Private Setup",
    description: keyword?.metaDescription || "Plan a intimate surprise date for your partner in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/intimate-surprise-date-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
