import { Link } from "react-router-dom"

const BestSellerCard = () => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
            <div className="card shadow">
                <img src="https://placeimg.com/300/300/any" alt="product" className="w-100 rounded-top" />
                <div className="card-body d-flex flex-column">
                    <Link to="/product" className="text-decoration-none text-dark">
                        <h5>Product name</h5>
                    </Link>
                    <Link to="/product" className="text-decoration-none text-secondary">
                        Category
                    </Link>
                    <h6 className="mb-2 mt-3">$61.99</h6>
                </div>
            </div>
        </div>
    )
}

export default BestSellerCard
