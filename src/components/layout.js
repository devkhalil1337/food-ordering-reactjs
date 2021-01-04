import React, {Component} from "react";
import Logo from "../lib/images/profile-image.jpg";
import Banner from "../lib/images/profile-banner.jpg";
import Header from "./header.jsx"
import MenuSection from "./menu-section"
import Footer from "./footer"
export default class Layout extends Component{
    render(){
        return(
          <div>
            <div className="page-wrapper">
                <div className="top-links">
                  <div className="container">
                      <ul className="row links">
                        <li className="col-xs-12 col-sm-3 link-item"><span>1</span><a href="index-2.html">Choose Your Location</a></li>
                        <li className="col-xs-12 col-sm-3 link-item"><span>2</span><a href="restaurants.html">Choose Restaurant</a></li>
                        <li className="col-xs-12 col-sm-3 link-item active"><span>3</span><a href="profile.html">Pick Your favorite food</a></li>
                        <li className="col-xs-12 col-sm-3 link-item"><span>4</span><a href="checkout.html">Order and Pay online</a></li>
                      </ul>
                  </div>
                </div>
                {/* Section Menuts */} 
                <section className="inner-page-hero bg-image" data-image-src={Banner} style={{background: `url(${Banner})`}}>
                <div className="profile">
                  <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12  col-md-4 col-lg-4 profile-img">
                            <div className="image-wrap">
                              <figure><img src={Logo} alt="Profile Image" /></figure>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 profile-desc">
                            <div className="pull-left right-text white-txt">
                              <h6><a href="#">Maenaam Thai Restaurant</a></h6>
                              <a className="btn btn-small btn-green">Open</a>
                              <p>Burgers, American, Sandwiches, Fast Food, BBQ</p>
                              <ul className="nav nav-inline">
                                  <li className="nav-item"> <a className="nav-link active" href="#"><i className="fa fa-check"></i> Min $ 10,00</a> </li>
                                  <li className="nav-item"> <a className="nav-link" href="#"><i className="fa fa-motorcycle"></i> 30 min</a> </li>
                                  <li className="nav-item ratings">
                                    <a className="nav-link" href="#"> <span>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    </span> </a>
                                  </li>
                              </ul>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                </section>
                <MenuSection />
                <Footer/>
            </div>
        </div>
 

        )
    }
}