import React, {Component} from 'react';

import {connect} from 'react-redux'

class CartModal extends Component {

    renderCartListItem = () => {
        if(this.props.cartListItem.length) {
            return this.props.cartListItem.map((item) => {
                return <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td><img src={item.image} alt=""/></td>
                    <td>{item.name}</td>
                    <td className="qty"><button onClick={() => {
                        this.props.minusQty(item.id)
                    }}><i className="bi bi-dash-square-fill"></i></button>
                       <span>{item.qty}</span>
                    <button onClick={() => {
                        this.props.plusQty(item.id)
                    }}><i className="bi bi-plus-square-fill"></i></button></td>
                    <td>{item.price}</td>
                    <td>{item.price * item.qty}</td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm" onClick={()=>{
                            this.props.deleteItemCart(item.id)
                        }}>
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </td>
                </tr>
            })
        }
        else {
            return <tr><td colSpan="6" className='text-center'>
                <div className="alert alert-warning" role="alert">
                    No item in carts.
                </div>
            </td></tr>
        }
    }

    render() {
        return (
            <>
                <div className="modal modal-lg fade" id="modal-cart" aria-hidden="true"
                     aria-labelledby="modal-cart" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modal-cart-title">Cart (<span>{this.props.cartListItem.length}</span>)</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <table className="table caption-top align-middle">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Images</th>
                                        <th scope="col">Name</th>
                                        <th>Quality</th>
                                        <th scope="col">Price</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderCartListItem()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItemCart : (productID) => {
            let action = {
                type: 'DELETE_ITEM_CART',
                productID
            }
            dispatch(action)
        },
        plusQty : (productID) => {
            let action = {
                type: 'PLUS_QTY_ITEM',
                productID
            }
            dispatch(action)
        },
        minusQty : (productID) => {
            let action = {
                type: 'MINUS_QTY_ITEM',
                productID
            }
            dispatch(action)
        },
    }
}

export default connect(null,mapDispatchToProps)(CartModal);
