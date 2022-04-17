const Coupon = () => {
    return (
        <div className="card mb-3 shadow">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label className="mb-2">Have coupon?</label>
                        <div className="input-group">
                            <input type="text" className="form-control rounded" placeholder="Coupon code" />
                            <button className="btn btn-primary btn-apply coupon">
                                Apply
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Coupon
