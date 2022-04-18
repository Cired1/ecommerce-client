import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import BestSellerCard from "../../components/BestSellerCard/BestSellerCard"

const Product = () => {
    return (
        <div className="bg-light page">
            <div className="container-lg py-5">
                <div className="row shadow mb-5">
                    <div className="col-lg-6 col-sm-12 p-2">
                        <img src="https://placeimg.com/640/480/any" className="w-100 h-100" alt="product" />
                    </div>
                    <div className="col-lg-6 col-sm-12 p-2">
                        <div className="card text-center h-100">
                            <div className="card-body">
                                <h3 className="card-title">
                                    Product name
                                </h3>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <div className="text-warning mb-1 me-2">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span className="text-secondary">310 reviews</span>
                                </div>
                                <p className="my-2">
                                    There are many variations of passages of Lorem Ipsum available, but the
                                    majority have suffered alteration in some form, by injected humour, or
                                    randomised words which don't look even slightly believable.
                                </p>
                                <div className="d-flex flex-column mb-1">
                                    <h4 className="mb-2">$13.99</h4>
                                    <span className="text-danger mb-2"><s>$20.99</s></span>
                                    <h6 className="mb-4">Category: <strong>sports</strong></h6>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                                    <input className="form-control w-25" placeholder="1" min="1" type="number" />
                                    <Link to="/cart" className="btn btn-primary" type="button">
                                        Add to cart
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h4 className="mb-4 fw-bold text-muted">Could interest you</h4>
                    <div className="row">
                        <BestSellerCard />
                        <BestSellerCard />
                        <BestSellerCard />
                        <BestSellerCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
