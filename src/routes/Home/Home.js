import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BestSellerCard from "../../components/BestSellerCard/BestSellerCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import SubFooter from "../../components/SubFooter/SubFooter";

const Home = () => {
  return (
    <div className="bg-light page">
      <Banner />
      <div className="container-lg py-3">
        <div className="container py-4">
          <h4 className="mb-4 fw-bold text-muted">Bestsellers</h4>
          <div className="row">
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
          </div>
          <div className="row">
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
          </div>
        </div>
        <div className="container py-4">
          <h4 className="mb-4 fw-bold text-muted">Categories</h4>
          <div className="row">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  )
}

export default Home
