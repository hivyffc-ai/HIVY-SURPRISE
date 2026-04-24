import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "romantic-romantic-setup-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Romantic Setup Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a romantic romantic setup in Surat at HIVY. Exclusively designed for couples.",
  alternates: { canonical: "https://surprisedatesurat.com/romantic-romantic-setup-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Romantic Setup Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a romantic romantic setup in Surat at HIVY. Exclusively designed for couples.",
    url: "https://surprisedatesurat.com/romantic-romantic-setup-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
