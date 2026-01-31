import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("majura-gate-surat")!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  keywords: [area.name, "surprise date", "romantic date", "date night", "Surat", "HIVY Surprise Date"],
  alternates: { canonical: `https://hivy.co.in/${area.slug}` },
  openGraph: {
    title: area.metaTitle,
    description: area.metaDescription,
    url: `https://hivy.co.in/${area.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY Surprise Date",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
