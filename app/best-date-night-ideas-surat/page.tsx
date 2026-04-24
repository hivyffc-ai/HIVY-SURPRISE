import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "best-date-night-ideas-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Best Date Night Ideas Surat | Couple Date Night",
  description: keyword?.metaDescription || "Find the best date night ideas in Surat. Private romantic setups at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/best-date-night-ideas-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Best Date Night Ideas Surat | Couple Date Night",
    description: keyword?.metaDescription || "Find the best date night ideas in Surat. Private romantic setups at HIVY.",
    url: "https://surprisedatesurat.com/best-date-night-ideas-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
