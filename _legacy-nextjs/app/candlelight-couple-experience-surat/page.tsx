import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-couple-experience-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Couple Experience Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a candlelight couple experience in Surat at HIVY. Exclusively designed for couples.",
  alternates: { canonical: "https://surprisedatesurat.com/candlelight-couple-experience-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Couple Experience Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a candlelight couple experience in Surat at HIVY. Exclusively designed for couples.",
    url: "https://surprisedatesurat.com/candlelight-couple-experience-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
