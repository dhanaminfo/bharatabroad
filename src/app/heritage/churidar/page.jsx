import GarmentPage from "@/components/heritage/GarmentPage";
import churidarData from "@/data/churidar-varieties.json";

export const metadata = {
  title: "Churidar Styles: A Fit-by-Fit Guide | Bharat Abroad",
  description:
    "Explore the varieties of churidar bottom wear — from the classic bias-cut bangle-fold silhouette to Patiala fusion, embroidered ankles, and everyday stretch fits.",
};

const CATEGORY_ORDER = ["Fit & Silhouette", "Fabric & Construction", "Embellishment & Detailing"];

export default function ChuridarPage() {
  return (
    <GarmentPage
      data={churidarData}
      categoryOrder={CATEGORY_ORDER}
      title="Churidar"
      fallbackImage="https://commons.wikimedia.org/wiki/Special:FilePath/Churidar pants.jpg"
    />
  );
}
