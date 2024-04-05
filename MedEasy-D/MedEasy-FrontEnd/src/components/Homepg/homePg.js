import { Link } from 'react-router-dom';
import "./home.css"
export const HomePg = () => {
    return (
        <div className="home">
            {/* Hero Start */}
            < div class="container-fluid bg-primary py-5 mb-5 hero-header" >
                <div class="container py-5">
                    <div class="row justify-content-start">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5" style={{ bordercolor: 'rgba(256, 256, 256, .3) !important' }}>Welcome To Medinova</h5>
                            <h1 class="display-1 text-white mb-md-4">Best Healthcare Portral...</h1>
                            <div class="pt-2">
                                <Link class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2" to='/medicine'>Medicine</Link>
                                <a href="https://example.com" class="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Appointment</a>
                                <Link class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2" to='/plasma'>Blood Bank</Link>
                                <Link class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2" to='/hospitalslist'>Hospitals</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
 
            {/* Services Start */}
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5" style={{ maxwidth: '500px' }}>
                        <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
                        <h1 class="display-4" style={{color: "black"}}>Excellent Medical Services</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon mb-4">
                                    <i class="fa fa-2x fa-user-md text-white"></i>
                                </div>
                                <h4 class="mb-3">Doctor Consultation</h4>
                                <p class="m-0" style={{color: "black"}}>Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                <a class="btn btn-lg btn-primary rounded-pill" href="https://example.com">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon mb-4">
                                    <i class="fa fa-2x fa-procedures text-white"></i>
                                </div>
                                <h4 class="mb-3">Emergency Care</h4>
                                <p class="m-0" style={{color: "black"}}>Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                <a class="btn btn-lg btn-primary rounded-pill" href="https://example.com">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon mb-4">
                                    <i class="fa fa-2x fa-stethoscope text-white"></i>
                                </div>
                                <h4 class="mb-3">Hospitals Nearby</h4>
                                <p class="m-0" style={{color: "black"}}>Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                <a class="btn btn-lg btn-primary rounded-pill" href="https://example.com">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon mb-4">
                                    <i class="fa fa-2x fa-ambulance text-white"></i>
                                </div>
                                <h4 class="mb-3">Ambulance Service</h4>
                                <p class="m-0" style={{color: "black"}}>Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                <a class="btn btn-lg btn-primary rounded-pill" href="https://example.com">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon mb-4">
                                    <i class="fa fa-2x fa-pills text-white"></i>
                                </div>
                                <h4 class="mb-3">Medicine & Pharmacy</h4>
                                <p class="m-0" style={{color: "black"}}>Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                <Link class="btn btn-lg btn-primary rounded-pill" to='/medicine'>
                                    <i class="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon mb-4">
                                    <i class="fa fa-2x fa-microscope text-white"></i>
                                </div>
                                <h4 class="mb-3">Blood Bank</h4>
                                <p class="m-0" style={{color: "black"}}>Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                <Link class="btn btn-lg btn-primary rounded-pill" to="/plasma">
                                    <i class="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5" style={{ maxwidth: '500px' }}>
                        <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Medical Packages</h5>
                        <h1 class="display-4" style={{color: "black"}}>Awesome Medical Programs</h1>
                    </div>
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col">
                                        <div class="bg-light rounded text-center">
                                            <div class="position-relative">
                                                <img class="img-fluid rounded-top" src="https://m.media-amazon.com/images/I/61zelZ6aknL.jpg" alt="" />
                                                <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                                    <h3 class="text-primary">Pregnancy Care</h3>
                                                    <h1 class="display-4 text-white mb-0">
                                                        <small class="align-top fw-normal" style={{ fontsize: '22px', lineheight: '45px' }}>$</small>49<small class="align-bottom fw-normal" style={{ fontsize: '16px', lineheight: '40px' }}>/ Year</small>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="text-center py-5">
                                                <p style={{color: "black"}}>Emergency Medical Treatment</p>
                                                <p style={{color: "black"}}>Highly Experienced Doctors</p>
                                                <p style={{color: "black"}}>Highest Success Rate</p>
                                                <p style={{color: "black"}}>Telephone Service</p>
                                                <a href="https://example.com" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="bg-light rounded text-center">
                                            <div class="position-relative">
                                                <img class="img-fluid rounded-top" src="https://m.media-amazon.com/images/I/61zelZ6aknL.jpg" alt="" />
                                                <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                                    <h3 class="text-primary">Pregnancy Care</h3>
                                                    <h1 class="display-4 text-white mb-0">
                                                        <small class="align-top fw-normal" style={{ fontsize: '22px', lineheight: '45px' }}>$</small>49<small class="align-bottom fw-normal" style={{ fontsize: '16px', lineheight: '40px' }}>/ Year</small>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="text-center py-5">
                                                <p style={{color: "black"}}>Emergency Medical Treatment</p>
                                                <p style={{color: "black"}}>Highly Experienced Doctors</p>
                                                <p style={{color: "black"}}>Highest Success Rate</p>
                                                <p style={{color: "black"}}>Telephone Service</p>
                                                <a href="https://example.com" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="bg-light rounded text-center">
                                            <div class="position-relative">
                                                <img class="img-fluid rounded-top" src="https://m.media-amazon.com/images/I/61zelZ6aknL.jpg" alt="" />
                                                <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                                    <h3 class="text-primary">Pregnancy Care</h3>
                                                    <h1 class="display-4 text-white mb-0">
                                                        <small class="align-top fw-normal" style={{ fontsize: '22px', lineheight: '45px' }}>$</small>49<small class="align-bottom fw-normal" style={{ fontsize: '16px', lineheight: '40px' }}>/ Year</small>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="text-center py-5">
                                                <p style={{color: "black"}}>Emergency Medical Treatment</p>
                                                <p style={{color: "black"}}>Highly Experienced Doctors</p>
                                                <p style={{color: "black"}}>Highest Success Rate</p>
                                                <p style={{color: "black"}}>Telephone Service</p>
                                                <a href="https://example.com" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col">
                                        <div class="bg-light rounded text-center">
                                            <div class="position-relative">
                                                <img class="img-fluid rounded-top" src="https://m.media-amazon.com/images/I/61zelZ6aknL.jpg" alt="" />
                                                <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                                    <h3 class="text-primary">Pregnancy Care</h3>
                                                    <h1 class="display-4 text-white mb-0">
                                                        <small class="align-top fw-normal" style={{ fontsize: '22px', lineheight: '45px' }}>$</small>49<small class="align-bottom fw-normal" style={{ fontsize: '16px', lineheight: '40px' }}>/ Year</small>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="text-center py-5">
                                                <p style={{color: "black"}}>Emergency Medical Treatment</p>
                                                <p style={{color: "black"}}>Highly Experienced Doctors</p>
                                                <p style={{color: "black"}}>Highest Success Rate</p>
                                                <p style={{color: "black"}}>Telephone Service</p>
                                                <a href="https://example.com" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="bg-light rounded text-center">
                                            <div class="position-relative">
                                                <img class="img-fluid rounded-top" src="https://m.media-amazon.com/images/I/61zelZ6aknL.jpg" alt="" />
                                                <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                                    <h3 class="text-primary">Pregnancy Care</h3>
                                                    <h1 class="display-4 text-white mb-0">
                                                        <small class="align-top fw-normal" style={{ fontsize: '22px', lineheight: '45px' }}>$</small>49<small class="align-bottom fw-normal" style={{ fontsize: '16px', lineheight: '40px' }}>/ Year</small>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="text-center py-5">
                                                <p style={{color: "black"}}>Emergency Medical Treatment</p>
                                                <p style={{color: "black"}}>Highly Experienced Doctors</p>
                                                <p style={{color: "black"}}>Highest Success Rate</p>
                                                <p style={{color: "black"}}>Telephone Service</p>
                                                <a href="https://example.com" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="bg-light rounded text-center">
                                            <div class="position-relative">
                                                <img class="img-fluid rounded-top" src="https://m.media-amazon.com/images/I/61zelZ6aknL.jpg" alt="" />
                                                <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                                    <h3 class="text-primary">Pregnancy Care</h3>
                                                    <h1 class="display-4 text-white mb-0">
                                                        <small class="align-top fw-normal" style={{ fontsize: '22px', lineheight: '45px' }}>$</small>49<small class="align-bottom fw-normal" style={{ fontsize: '16px', lineheight: '40px' }}>/ Year</small>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="text-center py-5">
                                                <p style={{color: "black"}}>Emergency Medical Treatment</p>
                                                <p style={{color: "black"}}>Highly Experienced Doctors</p>
                                                <p style={{color: "black"}}>Highest Success Rate</p>
                                                <p style={{color: "black"}}>Telephone Service</p>
                                                <a href="https://example.com" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col">
                                        <div class="bg-light rounded text-center">
                                            <div class="position-relative">
                                                <img class="img-fluid rounded-top" src="https://m.media-amazon.com/images/I/61zelZ6aknL.jpg" alt="" />
                                                <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                                    <h3 class="text-primary">Pregnancy Care</h3>
                                                    <h1 class="display-4 text-white mb-0">
                                                        <small class="align-top fw-normal" style={{ fontsize: '22px', lineheight: '45px' }}>$</small>49<small class="align-bottom fw-normal" style={{ fontsize: '16px', lineheight: '40px' }}>/ Year</small>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="text-center py-5">
                                                <p>Emergency Medical Treatment</p>
                                                <p>Highly Experienced Doctors</p>
                                                <p>Highest Success Rate</p>
                                                <p>Telephone Service</p>
                                                <a href="https://example.com" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="bg-light rounded text-center">
                                            <div class="position-relative">
                                                <img class="img-fluid rounded-top" src="https://m.media-amazon.com/images/I/61zelZ6aknL.jpg" alt="" />
                                                <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                                    <h3 class="text-primary">Pregnancy Care</h3>
                                                    <h1 class="display-4 text-white mb-0">
                                                        <small class="align-top fw-normal" style={{ fontsize: '22px', lineheight: '45px' }}>$</small>49<small class="align-bottom fw-normal" style={{ fontsize: '16px', lineheight: '40px' }}>/ Year</small>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="text-center py-5">
                                                <p>Emergency Medical Treatment</p>
                                                <p>Highly Experienced Doctors</p>
                                                <p>Highest Success Rate</p>
                                                <p>Telephone Service</p>
                                                <a href="https://example.com" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="bg-light rounded text-center">
                                            <div class="position-relative">
                                                <img class="img-fluid rounded-top" src="https://m.media-amazon.com/images/I/61zelZ6aknL.jpg" alt="" />
                                                <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: 'rgba(29, 42, 77, .8)' }}>
                                                    <h3 class="text-primary">Pregnancy Care</h3>
                                                    <h1 class="display-4 text-white mb-0">
                                                        <small class="align-top fw-normal" style={{ fontsize: '22px', lineheight: '45px' }}>$</small>49<small class="align-bottom fw-normal" style={{ fontsize: '16px', lineheight: '40px' }}>/ Year</small>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="text-center py-5">
                                                <p>Emergency Medical Treatment</p>
                                                <p>Highly Experienced Doctors</p>
                                                <p>Highest Success Rate</p>
                                                <p>Telephone Service</p>
                                                <a href="https://example.com" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Appointment Start */}
            <div class="container-fluid bg-primary my-5 py-5">
                <div class="container py-5">
                    <div class="row gx-5">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <div class="mb-4">
                                <h5 class="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                                <h1 class="display-4">Make An Appointment For Your Family</h1>
                            </div>
                            <p class="text-white mb-5">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                            <a class="btn btn-dark rounded-pill py-3 px-5 me-3" href="https://example.com">Find Doctor</a>
                            <a class="btn btn-outline-dark rounded-pill py-3 px-5" href="https://example.com">Read More</a>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-white text-center rounded p-5">
                                <h1 class="mb-4" style={{color: "black"}}>Book An Appointment</h1>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-12 col-sm-6">
                                            <select class="form-select bg-light border-0" style={{ height: '55px' }}>
                                                <option selected>Choose Department</option>
                                                <option value="1">Department 1</option>
                                                <option value="2">Department 2</option>
                                                <option value="3">Department 3</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <select class="form-select bg-light border-0" style={{ height: '55px' }}>
                                                <option selected>Select Doctor</option>
                                                <option value="1">Doctor 1</option>
                                                <option value="2">Doctor 2</option>
                                                <option value="3">Doctor 3</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control bg-light border-0" placeholder="Your Name" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="email" class="form-control bg-light border-0" placeholder="Your Email" style={{ height: '55px' }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="date" id="date" data-target-input="nearest">
                                                <input type="text"
                                                    class="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Date" data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="time" id="time" data-target-input="nearest">
                                                <input type="text"
                                                    class="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Time" data-target="#time" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Footer Start --> */}
            <div class="container-fluid bg-dark text-light mt-5 py-5">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                            <p class="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                            <p class="mb-2"><i class="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                            <p class="mb-0"><i class="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-light mb-2" href="https://example.com"><i class="fa fa-angle-right me-2"></i>Home</a>
                                <a class="text-light mb-2" href="https://example.com"><i class="fa fa-angle-right me-2"></i>About Us</a>
                                <a class="text-light mb-2" href="https://example.com"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                                <a class="text-light mb-2" href="https://example.com"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                                <a class="text-light mb-2" href="https://example.com"><i class="fa fa-angle-right me-2"></i>Latest Blog</a>
                                <a class="text-light" href="https://example.com"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-light mb-2" href="https://example.com"><i class="fa fa-angle-right me-2"></i>Home</a>
                                <a class="text-light mb-2" href="https://example.com"><i class="fa fa-angle-right me-2"></i>About Us</a>
                                <a class="text-light mb-2" href="https://example.com"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                                <a class="text-light mb-2" href="https://example.com"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                                <a class="text-light mb-2" href="https://example.com"><i class="fa fa-angle-right me-2"></i>Latest Blog</a>
                                <a class="text-light" href="https://example.com"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control p-3 border-0" placeholder="Your Email Address" />
                                    <button class="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <h6 class="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                            <div class="d-flex">
                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://example.com"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://example.com"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://example.com"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href="https://example.com"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-dark text-light border-top border-secondary py-4">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="mb-md-0">&copy; <a class="text-primary" href="https://example.com">Your Site Name</a>. All Rights Reserved.</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <p class="mb-0">Designed by <a class="text-primary" href="https://htmlcodex.com">HTML Codex</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

        </div>
    )
}

