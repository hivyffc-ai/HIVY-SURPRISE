import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "private-monthly-anniversary-surprise-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Monthly Anniversary Surprise Date Surat | Romantic Setup",
  description: keyword?.metaDescription || "Plan a private monthly anniversary surprise date in Surat. Romantic couple experience at HIVY.",
  alternates: { canonical: "https://surprisedatesurat.com/private-monthly-anniversary-surprise-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Monthly Anniversary Surprise Date Surat | Romantic Setup",
    description: keyword?.metaDescription || "Plan a private monthly anniversary surprise date in Surat. Romantic couple experience at HIVY.",
    url: "https://surprisedatesurat.com/private-monthly-anniversary-surprise-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
