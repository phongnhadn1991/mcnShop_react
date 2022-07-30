import {combineReducers} from 'redux';

import CartReducer from './CartReducer';

const rootReducer = combineReducers({ // store tổng của ứng dụng
    stateCart : CartReducer // stateCart
})

export default rootReducer;