import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "midnight-date-night-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Midnight Date Night Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a midnight date night in Surat at HIVY. Exclusively designed for couples.",
  alternates: { canonical: "https://surprisedatesurat.com/midnight-date-night-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Midnight Date Night Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a midnight date night in Surat at HIVY. Exclusively designed for couples.",
    url: "https://surprisedatesurat.com/midnight-date-night-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
