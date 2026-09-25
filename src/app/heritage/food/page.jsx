import NavigationBar from "@/components/heritage/NavigationBar";
import IndianFoodFilter from "@/components/heritage/IndianFoodFilter";
import "@/components/heritage/FashionHeritage.css";

export const metadata = {
  title: "Indian Heritage | Culture, History, Monuments & Tourism – BharatAbroad",
  description:
    "Explore India's rich history and heritage through ancient monuments, cultural traditions, UNESCO World Heritage Sites, and iconic heritage travel destinations on BharatAbroad.",
  openGraph: {
    title: "Indian Heritage for Global Indians | Culture, History, Monuments & Tourism – BharatAbroad",
    description:
      "Explore India's rich heritage, cultural traditions, ancient monuments, UNESCO World Heritage Sites, festivals, and heritage tourism stories curated for Indians and heritage lovers abroad on BharatAbroad.",
    type: "website",
    url: "https://www.bharatabroad.com/heritage",
    images: ["https://ayg.s3.us-east-2.amazonaws.com/bharatabroad.com-heritage.png"],
  },
  alternates: {
    canonical: "https://www.bharatabroad.com/heritage",
  },
  robots: "index, follow",
};

export default function FoodPage() {
  return (
    <div>
      <NavigationBar />
      <IndianFoodFilter />
    </div>
  );
}
