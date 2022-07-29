import React, { Component } from 'react'
import ProductItem from './ProductItem'
import DataProductShoes from '../../data/dataProductShoes.json'
import ModalDetail from './ModalDetail'
export default class ProductList extends Component {

    state = {
        productDetail: {},
        isShowModal: false
    }

    renderProductList = () => {
        let listDataProduct = DataProductShoes.map((item, index) => {
            return <ProductItem
            addToCart={this.props.addToCart}
            productItem={item}
            key={index}
            viewDetail={this.viewDetail} />
        })
        return listDataProduct
    }

    renderModalDetail = () => {
        if(this.state.isShowModal) {
            return <ModalDetail closeModalDetail={this.closeModalDetail} productState={this.state.productDetail} />
        }
    }

    viewDetail = (product) => {
        this.setState({
            isShowModal: !this.state.isShowModal,
            productDetail: product
        })
        document.querySelector('body').classList.add('modal-open')
    }

    closeModalDetail = () => {
        this.setState({
            isShowModal: !this.state.isShowModal,
        })
        document.querySelector('body').classList.remove('modal-open')
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className='list__product'>
                        {this.renderProductList()}
                    </div>
                </div>
                {this.renderModalDetail()}
            </>
        )
    }
}
