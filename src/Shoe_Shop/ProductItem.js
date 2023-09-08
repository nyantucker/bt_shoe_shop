import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {image,name,price} = this.props.item
    return (
      <div className="card text-left col-lg-4 p-4 col-sm-12">
        <div className='card-item p-3'>
        <img onClick={()=>{this.props.handleChangeModal(this.props.item)}}  data-toggle="modal" data-target="#exampleModal" className="card-img-top" src={image} alt style={{cursor:'pointer'}}/>
            <div className="card-body p-0">
            <strong className="">{name}</strong>
            <p className="card-text">{price}$
            </p>
            <button onClick={()=>{this.props.handleAddToCard(this.props.item)}} className='btn btn-dark'>Add To Cart</button>
          </div>
        </div>
            
      </div>
    )
  }
}
