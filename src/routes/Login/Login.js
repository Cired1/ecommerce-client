import { Link } from "react-router-dom"
import SideImage from "../../components/SideImage/SideImage"

const Login = () => {
    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black">
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
                            <form
                                style={{ width: '23rem' }}
                                autoComplete="off"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email address"
                                        /* {...register("email")} */
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        /* {...register("password")} */
                                    />
                                </div>
                                <div className="pt-1 mb-4 w-100">
                                    <button
                                        className="btn btn-primary btn-lg btn-block w-100 text-light"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </div>
                                <p>Don't have an account? <Link to="/register" className="link-primary">Register here</Link></p>
                            </form>
                        </div>
                    </div>
                    <SideImage />
                </div>
            </div>
        </section>
    )
}

export default Login
