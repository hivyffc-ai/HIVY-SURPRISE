import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "unique-date-night-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Unique Date Night Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a unique date night in Surat at HIVY. Exclusively designed for couples.",
  alternates: { canonical: "https://surprisedatesurat.com/unique-date-night-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Unique Date Night Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a unique date night in Surat at HIVY. Exclusively designed for couples.",
    url: "https://surprisedatesurat.com/unique-date-night-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
