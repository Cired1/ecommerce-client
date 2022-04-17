import Filters from "../../components/Filters/Filters";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
    return (
        <div style={{ paddingTop: "56px" }}>
            <div className="container-lg py-5">
                <div className="d-flex flex-wrap gap-3">
                    <aside className="aside-column">
                        <Filters />
                    </aside>
                    <div className="central-column">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
