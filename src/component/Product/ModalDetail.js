import React, { Component } from 'react'

export default class ModalDetail extends Component {
    render() {
        return (
            <div className='modal__product-detail' onClick={() => {
                this.props.closeModalDetail()
            }}>
                <div className='modal__content'>
                    <div className='modal__close' onClick={() => {
                        this.props.closeModalDetail()
                    }}>X</div>
                    <div className='product__detail' onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div className='left'>
                            <div className='product__thumb'>
                                <img src={this.props.productState.image} alt={this.props.productState.title} />
                            </div>
                        </div>
                        <div className='right'>
                            <div className='product__content'>
                                <div className='title'>
                                    {this.props.productState.name}
                                </div>
                                <div className='des'>
                                    {this.props.productState.description}
                                </div>
                                <div className='price'>
                                    {this.props.productState.price}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
