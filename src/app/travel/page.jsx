import TravelExplorer from "@/components/travel/TravelExplorer";

export const metadata = {
  title: "World Travel | Best Destinations, Tourism, Trips & Travel Guide – BharatAbroad",
  description:
    "Explore world travel guides, top destinations, budget travel tips, luxury vacations, hotel recommendations, itinerary ideas, tourism updates, and global travel inspiration on BharatAbroad.",
  openGraph: {
    title: "Global Travel & Tourism News | Destinations, Trips & Guides – BharatAbroad",
    description:
      "Explore global travel destinations, tourism trends, holiday ideas, travel guides, hotel stays, adventure trips, and worldwide travel experiences on BharatAbroad.",
    type: "website",
    url: "https://www.bharatabroad.com/travel",
    images: ["https://ayg.s3.us-east-2.amazonaws.com/bharatabroad.com-travel.png"],
  },
  alternates: {
    canonical: "https://www.bharatabroad.com/travel",
  },
  robots: "index, follow",
};

export default function TravelPage() {
  return <TravelExplorer />;
}
