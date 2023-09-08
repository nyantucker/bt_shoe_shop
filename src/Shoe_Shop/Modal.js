import React, { Component } from 'react'

export default class Modal extends Component {
  render() { 
    let {name,image,description,shortDescription,price} = this.props.productsDetail
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" >
              <img style={{width:'100%'}} src={image}></img>
              <div className='bg-light m-4 p-2'>
              <h1>{price} $</h1>
              <h5>{shortDescription}</h5>
              <p>{description}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
