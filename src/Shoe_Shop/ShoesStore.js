import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'
import { shoeArr } from './data'
import Nav_bar from './Nav_bar'
import CartShoe from './CartShoe'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { TANG_SL } from './constant/shoe_constant'
const MySwal = withReactContent(Swal)



export default class ShoesStore extends Component {
    state = {
        productsData: shoeArr,
        cart: [],
        productsDetail: {},
    }
    
    handleAddToCard = (shoe) => {
      let cloneCart = this.state.cart
      let index = cloneCart.findIndex((item)=>{
        return item.id == shoe.id})
      if (index == -1) {
        let newShoe = {...shoe, soLuong: 1}
        cloneCart.push(newShoe)
      } else {
        cloneCart[index].soLuong++
      }
      this.setState({
        cart: cloneCart
      })
      MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Added the item',
        showConfirmButton: false,
        timer: 1500
      })
    }

    handleRemove = (idShoe) => {
      let cloneCart = this.state.cart
      let index = cloneCart.findIndex((item)=> {
        return item.id == idShoe
      })
      cloneCart.splice(index,1)
      this.setState({
        cart: cloneCart
      })
      MySwal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Removed from cart',
        showConfirmButton: false,
        timer: 1500
      })
    }

    handleChangeQuantity = (idShoe,option) => {
      let cloneCart = this.state.cart
      let index = cloneCart.findIndex((item)=> {
        return item.id == idShoe
      })
      if (option == TANG_SL) {
        cloneCart[index].soLuong++
      } else {
        cloneCart[index].soLuong--
        cloneCart[index].soLuong==0 && this.handleRemove(idShoe)
      }
      this.setState({
        cart: cloneCart
      })
    }

    handleChangeModal = (shoe) => { 
      this.setState({
        productsDetail: shoe
        })
    }

  render() {
    return (
    <div className='container mt-5'>
        <div className='row'>
                <Nav_bar></Nav_bar>
                <div class="tab-content col-lg-10 col-sm-12" id="v-pills-tabContent">
                  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <h1>WELCOME !!!</h1>
                    <img src="./have-a-great-day-feature-22.png" style={{width:"100%"}}></img>
                  </div>
                  <ProductList productsData={this.state.productsData} handleAddToCard={this.handleAddToCard} handleChangeModal={this.handleChangeModal}/>
                  <CartShoe cart={this.state.cart} handleRemove={this.handleRemove} handleChangeQuantity={this.handleChangeQuantity} handleToLocalStrin={this.handleToLocalString}/>
                </div>
        </div>
        <Modal productsDetail={this.state.productsDetail}/>
    </div>

    )
  }
}
