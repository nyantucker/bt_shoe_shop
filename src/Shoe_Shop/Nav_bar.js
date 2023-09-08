import React, { Component } from 'react'

export default class Nav_bar extends Component {
  render() {
    return (
    <div className="nav flex-column nav-pills col-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" 
        aria-selected="true">Home</a>
        <a className="nav-link" id="v-pills-shop-tab" data-toggle="pill" href="#v-pills-shop" role="tab" aria-controls="v-pills-shop" 
        aria-selected="false">Shop</a>
        <a className="nav-link" id="v-pills-cart-tab" data-toggle="pill" href="#v-pills-cart" role="tab" aria-controls="v-pills-cart" 
        aria-selected="false">Cart</a>
    </div>
    )
  }
}


