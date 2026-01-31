import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "midnight-surprise-date-surat")!;

export const metadata: Metadata = {
  title: keyword.metaTitle,
  description: keyword.metaDescription,
  keywords: [keyword.title, "midnight date", "late night date", "12 AM date", "Surat", "HIVY Surprise Date"],
  alternates: { canonical: `https://hivy.co.in/${keyword.slug}` },
  openGraph: {
    title: keyword.metaTitle,
    description: keyword.metaDescription,
    url: `https://hivy.co.in/${keyword.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY Surprise Date",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
