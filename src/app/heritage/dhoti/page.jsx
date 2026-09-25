import GarmentPage from "@/components/heritage/GarmentPage";
import dhotiData from "@/data/dhoti-varieties.json";

export const metadata = {
  title: "Dhoti Styles: A Drape-by-Drape Guide | Bharat Abroad",
  description:
    "Explore the varieties of the dhoti — from the Tamil panchakacham and Bengali kacha drape to the Kerala mundu and regional dhotar and panche styles.",
};

const CATEGORY_ORDER = ["Draping Style", "Fabric & Weave", "Border & Colour Tradition", "Regional Variants"];

export default function DhotiPage() {
  return (
    <GarmentPage
      data={dhotiData}
      categoryOrder={CATEGORY_ORDER}
      title="Dhoti"
      fallbackImage="https://commons.wikimedia.org/wiki/Special:FilePath/Dhoti veshti.jpg"
    />
  );
}
