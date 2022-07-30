import React, {Component} from 'react';
import CartModal from "./CartModal";
import ProductList from "../Product/ProductList";

import {connect} from 'react-redux'

class CartContainer extends Component {

    render() {
        return (
            <>
                <ProductList/>
                <CartModal deleteCart={this.deleteCart} cartListItem={this.props.carts}/>
            </>
        );
    }
}

// Hàm lấy sate redux biến đổi thành props của component
const mapStateToProps = (state) => {
    return {
        carts : state.stateCart.carts
    }
}

export default connect(mapStateToProps)(CartContainer);
