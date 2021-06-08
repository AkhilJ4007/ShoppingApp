import ShoppingItem from "../../components/shoppingItem/shoppingItem.component";
import { type } from "jquery";
import shoppingPage from "../../pages/ShoppingPage/shoppingPage";

import {shoppingTypes} from './shopping_items.types'

export const getShoppingItemsSaga = () => {
    return({
        type: shoppingTypes.getShoppingItemsSaga,
    })
} 

export const getShoppingItems = (shoppingItems) => {
    return({
        type: shoppingTypes.getShoppingItems,
        payload: shoppingItems
    })
}

export const getShoppingItemSaga = (id) => {
    return({
        type: shoppingTypes.getShoppingItemSaga,
        payload : id
    })
} 


export const getShoppingItem = (shoppingItem) => {
    return({
        type: shoppingTypes.getShoppingItem,
        payload: shoppingItem
    })
}

export const addShoppingItem = (shoppingItem) => {
    return({
        type: shoppingTypes.addShoppingItemSaga,
        payload: shoppingItem
    })
}
