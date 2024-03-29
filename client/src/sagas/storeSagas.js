// Import the redux-saga/effects
import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects'
const axios = require("../axios")
const shoppingConstants = require("../redux/shopping_items/shopping_items.types").shoppingTypes
const alertTypes = require("../redux/alerts/alerts.types").alertTypes


  // Here's the unique part, generator function*, function with asterisk(*)
  // Get Shopping items
    function* getShoppingItems(action) {
      
        yield put({ type: shoppingConstants.setLoading })
        const shoppingItems = yield call(axios.getAllShoppingItems(action.payload))
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
    if(shoppingItem instanceof Error){
      yield put({ type: alertTypes.alert, payload: "Item could not be added to Store" })
    }
    else{
      yield put({ type: alertTypes.alert, payload: "Item added to the Store" })  
      yield put({ type: shoppingConstants.addShoppingItem, payload: shoppingItem })
    }

}


  // Export the saga (store-saga)
export default function* storeSaga() {
    yield takeEvery(shoppingConstants.getShoppingItemsSaga, getShoppingItems)
    yield takeEvery(shoppingConstants.getShoppingItemSaga, getShoppingItem)
    yield takeEvery(shoppingConstants.addShoppingItemSaga, addShoppingItem)
}