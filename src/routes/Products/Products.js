import ProductCard from "../../components/ProductCard/ProductCard"

const Products = () => {
    return (
        <div style={{ paddingTop: "56px" }}>
            <div className="container py-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Products
