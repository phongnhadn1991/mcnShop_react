import React, { Component } from 'react'

import {connect} from 'react-redux'

class Header extends Component { //React class component
    render() {
        return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://google.com">MCN SHOP REACT</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://google.com">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://google.com">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://google.com" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="http://google.com">Action</a></li>
                                    <li><a className="dropdown-item" href="http://google.com">Another action</a></li>
                                    <li><a className="dropdown-item" href="http://google.com">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <div className="d-flex mx-5">
                            <button type="button" className="btn btn-primary position-relative" data-bs-toggle="modal" href="#modal-cart">
                                Cart
                                <span
                                    id="numberLabel"
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {this.props.carts.length}
                                  </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
  }
}

// Hàm lấy sate redux biến đổi thành props của component
const mapStateToProps = state => {
    return {
        carts : state.stateCart.carts
    }
}

export default connect(mapStateToProps)(Header)