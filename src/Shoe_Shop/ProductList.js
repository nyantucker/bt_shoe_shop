import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProductList = () => { 
        return this.props.productsData.map((item,index) => { 
            return <ProductItem  item={item} key={index} handleAddToCard={this.props.handleAddToCard} handleChangeModal={this.props.handleChangeModal}/>
         })
     }
  render() {
    return (
        <div className="tab-pane fade" id="v-pills-shop" role="tabpanel" aria-labelledby="v-pills-shop-tab">
            <h1>SHOES SHOP</h1>
            <div className='row'>
                    {this.renderProductList()}
            </div>
        </div>
    )
  }
}
