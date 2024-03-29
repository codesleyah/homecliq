import Navbar from "../components/navigation/navbar";
import SmallBanner from "../components/banner/SmallBanner";
import ListingsTab from "../components/pages/listings/ListingsTab";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/router";

export default function Listings() {

  const router = useRouter();
  const { type, location } = router.query;

  return (
    <div className="font-quicksand">
      <Navbar />
      <SmallBanner heading="Listings" />
      <ListingsTab />
      <Footer />
    </div>
  );
}
