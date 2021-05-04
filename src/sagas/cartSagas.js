// Import the redux-saga/effects
import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects'
const axios = require("../axios")
const cartConstants = require("../redux/cart/cart.types").cartTypes

function* addToCart(action) {
    const addItem = yield call(axios.addCartItem(action.payload))
    //console.log("Message",addItem)
    yield put({ type: cartConstants.addCartItem, payload: addItem })
}

function* deleteCartItem(action) {
    const deleteItem = yield call(axios.deleteCartItem(action.payload))
    //console.log("Message",addItem)
    yield put({ type: cartConstants.deleteCartItem, payload: deleteItem })
}

function* getCart() {
    const cart = yield call(axios.getCart())
    yield put({ type: cartConstants.getCartItems, payload: cart })
}


export default function* cartSaga() {
    yield takeEvery(cartConstants.addCartItemSaga, addToCart)
    yield takeEvery(cartConstants.deleteCartItemSaga, deleteCartItem)
    yield takeEvery(cartConstants.getCartItemsSaga, getCart)

}