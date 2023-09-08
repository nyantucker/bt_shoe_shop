import React, { Component } from 'react'
import { GIAM_SL, TANG_SL } from './constant/shoe_constant'
import { NumericFormat } from 'react-number-format';

export default class CartShoe extends Component {
  renderCart = () => { 
    let {cart} = this.props
    return cart.map((item) => { 
      let {name,price,image,soLuong,id} = item
      let priceItem = price*soLuong
      return (
        <tr>
            <td>{name}</td>
            <td><NumericFormat value={priceItem} thousandsGroupStyle="lakh" thousandSeparator="," displayType="text" renderText={(value) => <span>${value}</span>}/></td>
            <td>
              <button onClick={()=>{this.props.handleChangeQuantity(id,GIAM_SL)}}>-</button>
              <span className='mx-3'>{soLuong}</span>
              <button onClick={()=>{this.props.handleChangeQuantity(id,TANG_SL)}}>+</button>
              </td>
            <td>
              <img width={100} src={image}></img>
            </td>
            <td>
              <button onClick={()=>{this.props.handleRemove(id)}} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
      )
     })
   }
  render() {
    return (
       <div className="tab-pane fade" id="v-pills-cart" role="tabpanel" aria-labelledby="v-pills-cart-tab">
        <h1>YOUR CART</h1>
         <table className='table'>
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.renderCart()}
          </tbody>
        </table>
       </div>


    )
  }
}
