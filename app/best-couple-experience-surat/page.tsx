import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "best-couple-experience-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Best Couple Experience Surat | Premium Private",
  description: keyword?.metaDescription || "Find the best couple experience in Surat. Premium private setups at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/best-couple-experience-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Best Couple Experience Surat | Premium Private",
    description: keyword?.metaDescription || "Find the best couple experience in Surat. Premium private setups at HIVY.",
    url: "https://surprisedatesurat.com/best-couple-experience-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
