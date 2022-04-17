import CartItem from "../../components/CartItem/CartItem";
import Coupon from "../../components/Coupon/Coupon";
import PayCard from "../../components/PayCard/PayCard";

const Cart = () => {
  return (
    <div style={{ paddingTop: "56px" }}>
      <div className="container-lg py-5">
        <div className="row">
          <div className="col-9">
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
          <aside className="col-3">
            <Coupon />
            <PayCard />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Cart
