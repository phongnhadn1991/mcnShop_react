import React, { Component } from 'react'
import ProductItem from './ProductItem'
import DataProductShoes from '../../data/dataProductShoes.json'
import ModalDetail from './ModalDetail'
export default class ProductList extends Component {

    state = {
        productDetail: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        isShowModal: false
    }



    renderProductList = () => {
        let listDataProduct = DataProductShoes.map((item, index) => {
            return <ProductItem
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
    }

    closeModalDetail = () => {
        this.setState({
            isShowModal: !this.state.isShowModal,
        })
    }
    

    render() {
        return (
            <>
                <div className='list__product'>
                    {this.renderProductList()}
                </div>
                {this.renderModalDetail()}
            </>
        )
    }
}
