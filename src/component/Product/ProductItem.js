import React, { Component } from 'react'

export default class ProductItem extends Component {
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
          <button onClick={() => {
            this.props.viewDetail(productItem)
          }}>View Detail</button>
        </div>
      </div>
    )
  }
}
