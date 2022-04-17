import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = () => {
    return (
        <tr>
            <td>
                <figure>
                    <div className="aside">
                        <img
                            src="https://placeimg.com/300/300/any"
                            alt="product 1"
                            className="rounded"
                        />
                    </div>
                    <figcaption className="info">
                        <Link to="/product" className="text-dark">
                            Tshirt with round neck
                        </Link>
                        <p className="text-muted mb-1">
                            SIZE: L
                        </p>
                        <p className="text-muted">
                            Brand: MAXTRA
                        </p>
                    </figcaption>
                </figure>
            </td>
            <td>
                <input className="form-control" placeholder="1" min="1" type="number" />
            </td>
            <td>
                <div className="d-flex flex-column">
                    <span>$10.00</span>
                    <small className="text-muted"> $9.20 each </small>
                </div>
            </td>
            <td>
                <button className="btn btn-danger d-flex align-items-center gap-2">
                    Remove
                    <FaTrashAlt />
                </button>
            </td>
        </tr>
    )
}

export default CartItem
