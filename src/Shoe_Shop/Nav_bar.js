import React, { Component } from 'react'

export default class Nav_bar extends Component {
  render() {
    return (
    <div className="nav flex-column nav-pills col-lg-2 col-sm-12" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" 
        aria-selected="true"> <i className="fa fa-home"></i> <span>Home</span></a>
        <a className="nav-link" id="v-pills-shop-tab" data-toggle="pill" href="#v-pills-shop" role="tab" aria-controls="v-pills-shop" 
        aria-selected="false"> <i className="fa fa-th-list"></i> <span>Shop</span> </a>
        <a className="nav-link" id="v-pills-cart-tab" data-toggle="pill" href="#v-pills-cart" role="tab" aria-controls="v-pills-cart" 
        aria-selected="false"> <i className="fa fa-shopping-cart"></i><span>Cart</span> </a>
    </div>
    )
  }
}


