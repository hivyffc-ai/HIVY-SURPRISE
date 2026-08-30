import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "special-surprise-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Special Surprise Date Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a special surprise date in Surat at HIVY. Exclusively designed for couples.",
  alternates: { canonical: "https://surprisedatesurat.com/special-surprise-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Special Surprise Date Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a special surprise date in Surat at HIVY. Exclusively designed for couples.",
    url: "https://surprisedatesurat.com/special-surprise-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
