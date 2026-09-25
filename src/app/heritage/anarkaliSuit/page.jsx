import GarmentPage from "@/components/heritage/GarmentPage";
import anarkaliData from "@/data/anarkali-varieties.json";

export const metadata = {
  title: "Anarkali Suit Styles: A Silhouette-by-Silhouette Guide | Bharat Abroad",
  description:
    "Explore the varieties of the Anarkali suit — from floor-length bridal silhouettes to Chikankari, mirror-work, and Hyderabadi Nizami styles.",
};

const CATEGORY_ORDER = ["Silhouette & Length", "Fabric & Craft Tradition", "Neckline & Sleeve Style", "Regional & Bridal Variants"];

export default function AnarkaliSuitPage() {
  return (
    <GarmentPage
      data={anarkaliData}
      categoryOrder={CATEGORY_ORDER}
      title="Anarkali Suit"
      fallbackImage="https://commons.wikimedia.org/wiki/Special:FilePath/Anarkali suit.jpg"
    />
  );
}
