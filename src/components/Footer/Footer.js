import { FaEnvelope, FaFacebook, FaGoogle, FaHome, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="bg-secondary">
            <footer className="text-center text-lg-start text-white">
                <div className="container p-4 pb-0">
                    <section className>
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold">
                                    ShoppingMx
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold">Products</h6>
                                <p className="text-decoration-underline">
                                    Electronics
                                </p>
                                <p className="text-decoration-underline">
                                    Watches
                                </p>
                                <p className="text-decoration-underline">
                                    Clothes
                                </p>
                                <p className="text-decoration-underline">
                                    Cinema
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold">
                                    Useful links
                                </h6>
                                <p className="text-decoration-underline">
                                    Terms and conditions
                                </p>
                                <p className="text-decoration-underline">
                                    Privacy
                                </p>
                                <p className="text-decoration-underline">
                                    About
                                </p>
                                <p className="text-decoration-underline">
                                    Help
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold">Contact</h6>
                                <p><FaHome /> México</p>
                                <p><FaEnvelope /> edabundis@gmail.com</p>
                                <p><FaPhone /> + 01 234 567 88</p>
                            </div>
                        </div>
                    </section>
                    <hr className="my-3" />
                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2022 Copyright: Bryan Abundis
                                </div>
                            </div>
                            <div className="d-flex gap-2 col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <FaFacebook />
                                <FaTwitter />
                                <FaGoogle />
                                <FaInstagram />
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer
