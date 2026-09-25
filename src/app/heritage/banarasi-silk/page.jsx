import GarmentPage from "@/components/heritage/GarmentPage";
import banarasiData from "@/data/banarasi-varieties.json";

export const metadata = {
  title: "Banarasi Silk Sarees: A Weave-by-Weave Guide | Bharat Abroad",
  description:
    "Explore the varieties of Banarasi silk sarees — from katan silk and jangla brocade to meenakari zari and shikargah pallus.",
};

const CATEGORY_ORDER = ["Weave & Base Fabric", "Weaving Technique", "Zari & Brocade Style", "Border & Pallu Style"];

export default function BanarasiSilkSareePage() {
  return (
    <GarmentPage
      data={banarasiData}
      categoryOrder={CATEGORY_ORDER}
      title="Banarasi Silk Sarees"
      fallbackImage="https://commons.wikimedia.org/wiki/Special:FilePath/Banarasi silk saree.jpg"
    />
  );
}
