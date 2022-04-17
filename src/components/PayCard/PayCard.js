const PayCard = () => {
    return (
        <div className="card shadow">
            <div className="card-body">
                <div className="d-flex flex-column mb-2">
                    <span className="fw-bold">Total price:</span>
                    <span className="text-right ml-3">$69.97</span>
                </div>
                <div className="d-flex flex-column mb-2">
                    <span className="fw-bold">Discount:</span>
                    <span className="text-danger ml-3">- $10.00</span>
                </div>
                <div className="d-flex flex-column mb-2">
                    <span className="fw-bold">Total:</span>
                    <span className="fw-bold text-dark ml-3">$59.97</span>
                </div>
                <hr />
                <button className="btn btn-primary mb-2 w-100">
                    Make Purchase
                </button>
                <button className="btn btn-success w-100 mW">
                    Continue Shopping
                </button>
            </div>
        </div>
    )
}

export default PayCard
