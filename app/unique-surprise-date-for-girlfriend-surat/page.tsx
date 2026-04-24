import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "unique-surprise-date-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Unique Surprise Date For Girlfriend Surat | Private Setup",
  description: keyword?.metaDescription || "Plan a unique surprise date for your girlfriend in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/unique-surprise-date-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Unique Surprise Date For Girlfriend Surat | Private Setup",
    description: keyword?.metaDescription || "Plan a unique surprise date for your girlfriend in Surat. Private romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/unique-surprise-date-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
