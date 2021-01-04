import React from "react";
import food1 from "../lib/images/food1.jpg";

const  MenuSection = () => {
    return(
        <div className="container m-t-30">
        <div className="row">
           <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
              <div className="sidebar clearfix m-b-20">
                 <div className="main-block">
                    <div className="sidebar-title white-txt">
                       <h6>Choose Cusine</h6>
                       <i className="fa fa-cutlery pull-right"></i> 
                    </div>
                    <ul>
                       <li><a href="#1" className="scroll active">Pizza</a></li>
                       <li><a href="#2" className="scroll">Barbecuing and Grilling</a></li>
                       <li><a href="#3" className="scroll">Appetizers</a></li>
                       <li><a href="#4" className="scroll">Soup and salads</a></li>
                       <li><a href="#5" className="scroll">Pasta</a></li>
                       <li><a href="#6" className="scroll">Seafood</a></li>
                       <li><a href="#7" className="scroll">Beverages</a></li>
                    </ul>
                    <div className="clearfix"></div>
                 </div>
                 <div className="widget-delivery">
                    <form>
                       <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                          <label className="custom-control custom-radio">
                          <input id="radio1" name="radio" type="radio" className="custom-control-input" /> <span className="custom-control-indicator"></span> <span className="custom-control-description">Delivery</span> </label>
                       </div>
                       <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                          <label className="custom-control custom-radio">
                          <input id="radio2" name="radio" type="radio" className="custom-control-input" /> <span className="custom-control-indicator"></span> <span className="custom-control-description">Takeout</span> </label>
                       </div>
                    </form>
                 </div>
              </div>
              <div className="widget clearfix">
                 <div className="widget-heading">
                    <h3 className="widget-title text-dark">
                       Popular tags
                    </h3>
                    <div className="clearfix"></div>
                 </div>
                 <div className="widget-body">
                    <ul className="tags">
                       <li> <a href="#" className="tag">
                          Coupons
                          </a> 
                       </li>
                       <li> <a href="#" className="tag">
                          Discounts
                          </a> 
                       </li>
                       <li> <a href="#" className="tag">
                          Deals
                          </a> 
                       </li>
                       <li> <a href="#" className="tag">
                          Amazon 
                          </a> 
                       </li>
                       <li> <a href="#" className="tag">
                          Ebay
                          </a> 
                       </li>
                       <li> <a href="#" className="tag">
                          Fashion
                          </a> 
                       </li>
                       <li> <a href="#" className="tag">
                          Shoes
                          </a> 
                       </li>
                       <li> <a href="#" className="tag">
                          Kids
                          </a> 
                       </li>
                       <li> <a href="#" className="tag">
                          Travel
                          </a> 
                       </li>
                       <li> <a href="#" className="tag">
                          Hosting
                          </a> 
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
           <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6">
              <div className="menu-widget m-b-30">
                 <div className="widget-heading">
                    <h3 className="widget-title text-dark">
                       POPULAR ORDERS Delicious hot food! <a className="btn btn-link pull-right" data-toggle="collapse" href="#popular" aria-expanded="true">
                       <i className="fa fa-angle-right pull-right"></i>
                       <i className="fa fa-angle-down pull-right"></i>
                       </a>
                    </h3>
                    <div className="clearfix"></div>
                 </div>
                 <div className="collapse in" style={{display:'block'}} id="1">
                    <div className="food-item white">
                       <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-8">
                             <div className="rest-logo pull-left">
                                <a className="restaurant-logo pull-left" href="#"><img src={food1} alt="Food logo"/></a>
                             </div>
                             {/* end:Logo */}
                             <div className="rest-descr">
                                <h6><a href="#">Veg Extravaganza</a></h6>
                                <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                             </div>
                             {/* end:Description */}
                          </div>
                          {/* end:col */}
                          <div className="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span className="price pull-left">$ 19.99</span> <a href="#" className="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                       </div>
                       {/* end:row */}
                    </div>
                    {/* end:Food item */}
                    <div className="food-item">
                       <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-8">
                             <div className="rest-logo pull-left">
                                <a className="restaurant-logo pull-left" href="#"><img src={food1} alt="Food logo"/></a>
                             </div>
                             {/* end:Logo */}
                             <div className="rest-descr">
                                <h6><a href="#">Veg Extravaganza</a></h6>
                                <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                             </div>
                             {/* end:Description */}
                          </div>
                          {/* end:col */}
                          <div className="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span className="price pull-left">$ 19.99</span> <a href="#" className="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                       </div>
                       {/* end:row */}
                    </div>
                    {/* end:Food item */}
                    <div className="food-item white">
                       <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-8">
                             <div className="rest-logo pull-left">
                                <a className="restaurant-logo pull-left" href="#"><img src={food1} alt="Food logo" /></a>
                             </div>
                             {/* end:Logo */}
                             <div className="rest-descr">
                                <h6><a href="#">Veg Extravaganza</a></h6>
                                <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                             </div>
                             {/* end:Description */}
                          </div>
                          {/* end:col */}
                          <div className="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span className="price pull-left">$ 19.99</span> <a href="#" className="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                       </div>
                       {/* end:row */}
                    </div>
                    {/* end:Food item */}
                    <div className="food-item">
                       <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-8">
                             <div className="rest-logo pull-left">
                                <a className="restaurant-logo pull-left" href="#"><img src={food1} alt="Food logo"/></a>
                             </div>
                             {/* end:Logo */}
                             <div className="rest-descr">
                                <h6><a href="#">Veg Extravaganza</a></h6>
                                <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                             </div>
                             {/* end:Description */}
                          </div>
                          {/* end:col */}
                          <div className="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span className="price pull-left">$ 19.99</span> <a href="#" className="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                       </div>
                       {/* end:row */}
                    </div>
                    {/* end:Food item */}
                 </div>

                 
              </div>
              <div className="menu-widget m-b-30">
                 <div className="widget-heading">
                    <h3 className="widget-title text-dark">
                       POPULAR ORDERS Delicious hot food! <a className="btn btn-link pull-right" data-toggle="collapse" href="#popular" aria-expanded="true">
                       <i className="fa fa-angle-right pull-right"></i>
                       <i className="fa fa-angle-down pull-right"></i>
                       </a>
                    </h3>
                    <div className="clearfix"></div>
                 </div>
                 <div className="collapse in" style={{display:'block'}} id="1">
                    <div className="food-item white">
                       <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-8">
                             <div className="rest-logo pull-left">
                                <a className="restaurant-logo pull-left" href="#"><img src={food1} alt="Food logo"/></a>
                             </div>
                             {/* end:Logo */}
                             <div className="rest-descr">
                                <h6><a href="#">Veg Extravaganza</a></h6>
                                <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                             </div>
                             {/* end:Description */}
                          </div>
                          {/* end:col */}
                          <div className="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span className="price pull-left">$ 19.99</span> <a href="#" className="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                       </div>
                       {/* end:row */}
                    </div>
                    {/* end:Food item */}
                    <div className="food-item">
                       <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-8">
                             <div className="rest-logo pull-left">
                                <a className="restaurant-logo pull-left" href="#"><img src={food1} alt="Food logo"/></a>
                             </div>
                             {/* end:Logo */}
                             <div className="rest-descr">
                                <h6><a href="#">Veg Extravaganza</a></h6>
                                <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                             </div>
                             {/* end:Description */}
                          </div>
                          {/* end:col */}
                          <div className="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span className="price pull-left">$ 19.99</span> <a href="#" className="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                       </div>
                       {/* end:row */}
                    </div>
                    {/* end:Food item */}
                    <div className="food-item white">
                       <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-8">
                             <div className="rest-logo pull-left">
                                <a className="restaurant-logo pull-left" href="#"><img src={food1} alt="Food logo" /></a>
                             </div>
                             {/* end:Logo */}
                             <div className="rest-descr">
                                <h6><a href="#">Veg Extravaganza</a></h6>
                                <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                             </div>
                             {/* end:Description */}
                          </div>
                          {/* end:col */}
                          <div className="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span className="price pull-left">$ 19.99</span> <a href="#" className="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                       </div>
                       {/* end:row */}
                    </div>
                    {/* end:Food item */}
                    <div className="food-item">
                       <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-8">
                             <div className="rest-logo pull-left">
                                <a className="restaurant-logo pull-left" href="#"><img src={food1} alt="Food logo"/></a>
                             </div>
                             {/* end:Logo */}
                             <div className="rest-descr">
                                <h6><a href="#">Veg Extravaganza</a></h6>
                                <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                             </div>
                             {/* end:Description */}
                          </div>
                          {/* end:col */}
                          <div className="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span className="price pull-left">$ 19.99</span> <a href="#" className="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                       </div>
                       {/* end:row */}
                    </div>
                    {/* end:Food item */}
                 </div>

                 
              </div>
           </div>
           <div className="col-xs-12 col-md-12 col-lg-3">
             <div className="sidebar-wrap">
                <div className="widget widget-cart">
                   <div className="widget-heading">
                      <h3 className="widget-title text-dark">
                         Your Shopping Cart
                      </h3>
                      <div className="clearfix"></div>
                   </div>
                   <div className="order-row bg-white">
                      <div className="widget-body">
                         <div className="title-row">Pizza Quatro Stagione <a href="#"><i className="fa fa-trash pull-right"></i></a></div>
                         <div className="form-group row no-gutter">
                            <div className="col-xs-8">
                               <select className="form-control b-r-0" id="exampleSelect1">
                                  <option>Size SM</option>
                                  <option>Size LG</option>
                                  <option>Size XL</option>
                               </select>
                            </div>
                            <div className="col-xs-4">
                               <input className="form-control" type="number" id="example-number-input" /> 
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="order-row">
                      <div className="widget-body">
                         <div className="title-row">Carlsberg Beer <a href="#"><i className="fa fa-trash pull-right"></i></a></div>
                         <div className="form-group row no-gutter">
                            <div className="col-xs-8">
                               <select className="form-control b-r-0">
                                  <option>Size SM</option>
                                  <option>Size LG</option>
                                  <option>Size XL</option>
                               </select>
                            </div>
                            <div className="col-xs-4">
                               <input className="form-control"  id="quant-input" /> 
                            </div>
                         </div>
                      </div>
                   </div>
                   {/* end:Order row */}
                   <div className="widget-delivery clearfix">
                      <form>
                         <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6 b-t-0">
                            <label className="custom-control custom-radio">
                            <input id="radio4" name="radio" type="radio" className="custom-control-input" /> <span className="custom-control-indicator"></span> <span className="custom-control-description">Delivery</span> </label>
                         </div>
                         <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6 b-t-0">
                            <label className="custom-control custom-radio">
                            <input id="radio3" name="radio" type="radio" className="custom-control-input" /> <span className="custom-control-indicator"></span> <span className="custom-control-description">Takeout</span> </label>
                         </div>
                      </form>
                   </div>
                   <div className="widget-body">
                      <div className="price-wrap text-xs-center">
                         <p>TOTAL</p>
                         <h3 className="value"><strong>$ 25,49</strong></h3>
                         <p>Free Shipping</p>
                         <button  type="button" className="btn theme-btn btn-lg">Checkout</button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
     </div>
    )
}

export default MenuSection;