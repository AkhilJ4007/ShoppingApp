// Import the redux-saga/effects
import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects'
const axios = require("../axios")
const shoppingConstants = require("../redux/shopping_items/shopping_items.types").shoppingTypes


  // Here's the unique part, generator function*, function with asterisk(*)
  // Get Shopping items
    function* getShoppingItems() {
      
        yield put({ type: shoppingConstants.setLoading })
        const shoppingItems = yield call(axios.getAllShoppingItems)
        yield put({ type: shoppingConstants.getShoppingItems, payload: shoppingItems })
    }

    //get shopping item
    function* getShoppingItem(action) {
      yield put({ type: shoppingConstants.setLoading })
      //console.log("getShoppingItem Id",action.payload)
      const shoppingItem = yield call(axios.getShoppingItem(action.payload))
      yield put({ type: shoppingConstants.getShoppingItem, payload: shoppingItem })
  }

  function* addShoppingItem(action) {
    
    const shoppingItem = yield call(axios.addShoppingItem(action.payload))
    yield put({ type: shoppingConstants.addShoppingItem, payload: shoppingItem })
}


  // Export the saga (store-saga)
export default function* storeSaga() {
    yield takeEvery(shoppingConstants.getShoppingItemsSaga, getShoppingItems)
    yield takeEvery(shoppingConstants.getShoppingItemSaga, getShoppingItem)
    yield takeEvery(shoppingConstants.addShoppingItemSaga, addShoppingItem)
}