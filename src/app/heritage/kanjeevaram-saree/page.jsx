import GarmentPage from "@/components/heritage/GarmentPage";
import kanjeevaramData from "@/data/kanjeevaram-varieties.json";

export const metadata = {
  title: "Kanjeevaram Sarees: A Weave-by-Weave Guide | Bharat Abroad",
  description:
    "Explore the varieties of Kanjeevaram (Kanchipuram) silk sarees — from korvai weaving and temple borders to tissue silk and bridal zari work.",
};

const CATEGORY_ORDER = ["Weave & Construction", "Motif & Design Tradition", "Zari & Finish", "Special & Heavier Categories"];

export default function KanjeevaramPage() {
  return (
    <GarmentPage
      data={kanjeevaramData}
      categoryOrder={CATEGORY_ORDER}
      title="Kanjeevaram Sarees"
      fallbackImage="https://commons.wikimedia.org/wiki/Special:FilePath/Kanchipuram silk saree.jpg"
    />
  );
}
