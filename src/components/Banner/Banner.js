import { Link } from "react-router-dom";
import bannerImg from "../../assets/hero.jpg";

const Banner = () => {
    return (
        <div className="container-fluid">
        <div className="row pb-2">
          <div className="col-lg-6 col-sm-12 p-0" style={{ backgroundColor: "#e0edf5" }}>
            <div className="p-3 ps-4 text-center">
              <p className="fs-4 mb-0">Welcome</p>
              <p className="fs-1 fw-bold mb-0">Discover</p>
              <p className="fs-1 fw-bold mb-0">our</p>
              <p className="fs-1 fw-bold">products</p>
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 p-0">
            <img
              src={bannerImg}
              alt="banner"
              className="w-100 h-100"
            />
          </div>
        </div>
      </div>
    )
}

export default Banner
