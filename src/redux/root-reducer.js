import {combineReducers} from 'redux'

import shoppingItemsReducer from './shopping_items/shopping_items.reducer'
import userReducer from "./user/userReducer"
import cartReducer from './cart/cart.reducer'
import alertReducer from './alerts/alerts.reducer'

export default combineReducers({
    shoppingItems: shoppingItemsReducer,
    user: userReducer,
    cart: cartReducer,
    alert : alertReducer
})