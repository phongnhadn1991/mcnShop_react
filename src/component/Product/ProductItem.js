import React, { Component } from 'react'

import {connect} from 'react-redux'

 class ProductItem extends Component {
  render() {
    let { productItem } = this.props
    let { name, image } = this.props.productItem
    return (
      <div className='product'>
        <div className='product__thumb'>
          <img src={image} alt={name} />
        </div>
        <div className='product__title'>
          {name}
        </div>
        <div className="product__action">
            <div className="d-grid gap-2 d-md-flex justify-content-center">
            <button type="button" className="btn btn-dark" onClick={() => {
                this.props.viewDetail(productItem)
            }}>View</button>
            <button type="button" className="btn btn-success" onClick={() => {
                this.props.addToCart(productItem)
            }}><i className="bi bi-bag-plus-fill"></i></button>
            </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart : (product) => {
          let action = {
            type : 'ADD_TO_CART',
            product
          }
          dispatch(action);
      }
  }
}

export default connect(null,mapDispatchToProps)(ProductItem)