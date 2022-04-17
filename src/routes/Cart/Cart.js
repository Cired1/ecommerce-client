import CartItem from "../../components/CartItem/CartItem";
import Coupon from "../../components/Coupon/Coupon";
import PayCard from "../../components/PayCard/PayCard";

const Cart = () => {
  return (
    <div className="bg-light page">
      <div className="container-lg py-5">
        <div className="d-flex flex-wrap gap-3">
          <div className="central-column">
            <div className="card shadow">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col" className="w-25">Product</th>
                      <th scope="col" className="w-25">Quantity</th>
                      <th scope="col" className="w-25">Price</th>
                      <th scope="col" className="w-25" />
                    </tr>
                  </thead>
                  <tbody>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <aside className="aside-column">
            <Coupon />
            <PayCard />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Cart
