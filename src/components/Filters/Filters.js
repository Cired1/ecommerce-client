import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Filters = () => {

    const [showCategories, setShowCategories] = useState(true);
    const [showPrice, setShowPrice] = useState(true);

    return (
        <div className="card shadow">
            <article className="filter-group">
                <header className="card-header bg-primary bg-gradient text-light" style={{ cursor: "pointer" }}>
                    <div
                        className="title collapsed d-flex align-items-center justify-content-between"
                        onClick={() => setShowCategories(!showCategories)}
                    >
                        Categories
                        <FaAngleDown />
                    </div>
                </header>
                <div className={`collapse ${showCategories ? "show" : ""}`}>
                    <div className="card-body">
                        <ul className="list-menu px-0">
                            <li className="dropdown-list-item">
                                Electronics
                            </li>
                            <li className="dropdown-list-item">
                                Watches
                            </li>
                            <li className="dropdown-list-item">
                                Cinema
                            </li>
                            <li className="dropdown-list-item">
                                Clothes
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className="filter-group">
                <header className="card-header bg-primary bg-gradient text-light" style={{ cursor: "pointer" }}>
                    <div
                        className="title collapsed d-flex align-items-center justify-content-between"
                        onClick={() => setShowPrice(!showPrice)}
                    >
                        Price
                        <FaAngleDown />
                    </div>
                </header>
                <div className={`collapse ${showPrice ? "show" : ""}`}>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-6">
                                <label className="form-label">Min</label>
                                <input className="form-control" placeholder="$0" type="number" />
                            </div>
                            <div className="col-6">
                                <label className="form-label">Max</label>
                                <input className="form-control" placeholder="$1,000" type="number" />
                            </div>
                        </div>
                        <button className="btn btn-outline-primary w-100" type="button">
                            Apply
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Filters
