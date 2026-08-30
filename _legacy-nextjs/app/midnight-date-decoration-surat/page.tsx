import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "midnight-date-decoration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Midnight Date Decoration Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a midnight date decoration in Surat at HIVY. Exclusively designed for couples.",
  alternates: { canonical: "https://surprisedatesurat.com/midnight-date-decoration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Midnight Date Decoration Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a midnight date decoration in Surat at HIVY. Exclusively designed for couples.",
    url: "https://surprisedatesurat.com/midnight-date-decoration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
