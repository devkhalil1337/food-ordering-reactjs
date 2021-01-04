import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const  Header = () => {
    return(
        <header id="header" className="header-scroll top-header headrom">
            <nav className="navbar navbar-dark">
                <div className="container">
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#mainNavbarCollapse">&#9776;</button>
                    <div className="collapse navbar-toggleable-md  float-lg-right" id="mainNavbarCollapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"> <a className="nav-link active" href="index-2.html">Home <span className="sr-only">(current)</span></a> </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Food</a>
                                <div className="dropdown-menu"> <a className="dropdown-item" href="food_results.html">Food results</a> <a className="dropdown-item" href="map_results.html">Map results</a></div>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Restaurants</a>
                                <div className="dropdown-menu"> <a className="dropdown-item" href="restaurants.html">Search results</a> <a className="dropdown-item" href="profile.html">Profile page</a></div>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <div className="dropdown-menu"> <a className="dropdown-item" href="pricing.html">Pricing</a> <a className="dropdown-item" href="contact.html">Contact</a> <a className="dropdown-item" href="submition.html">Submit restaurant</a> <a className="dropdown-item" href="registration.html">Registration</a>
                                    <div className="dropdown-divider"></div> <a className="dropdown-item" href="checkout.html">Checkout</a> </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;