import { MdOutlineSportsSoccer } from "react-icons/md"

const CategoryCard = () => {
    return (
        <div className="col-lg-2 col-md-3 col-sm-4 mb-4">
              <div className="card shadow p-2 d-flex justify-content-center align-items-center category-card">
                <MdOutlineSportsSoccer className="fs-1" />
                <span className="fw-bold">Category</span>
              </div>
            </div>
    )
}

export default CategoryCard
