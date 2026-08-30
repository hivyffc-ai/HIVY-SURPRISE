import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "unique-date-ideas-couple-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Unique Date Ideas Couples Surat | Creative Romantic Setup",
  description: keyword?.metaDescription || "Discover unique date ideas for couples in Surat. Creative romantic setup at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/unique-date-ideas-couple-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Unique Date Ideas Couples Surat | Creative Romantic Setup",
    description: keyword?.metaDescription || "Discover unique date ideas for couples in Surat. Creative romantic setup at HIVY.",
    url: "https://surprisedatesurat.com/unique-date-ideas-couple-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
