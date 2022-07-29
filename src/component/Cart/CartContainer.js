import React, {Component} from 'react';
import CartModal from "./CartModal";
import ProductList from "../Product/ProductList";

class CartContainer extends Component {

    state = {
        carts : [],
    }

    addToCart = (product) => {
        let itemCart = this.state.carts.find(item => item.id === product.id)
        if(itemCart){
            itemCart.qty++
        } else {
            this.state.carts.push({...product, qty:1})
        }
        this.setState({
            carts : this.state.carts
        })
    }

    deleteCart = (productId) => {
        let listCart = this.state.carts.filter(item => item.id !== productId)
        this.setState({
            carts : listCart
        })
    }

    render() {
        return (
            <>
                <ProductList addToCart={this.addToCart}/>
                <CartModal deleteCart={this.deleteCart} cartListItem={this.state.carts}/>
            </>
        );
    }
}

export default CartContainer;
