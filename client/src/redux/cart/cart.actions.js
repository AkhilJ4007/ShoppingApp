

const cartTypes = require("./cart.types").cartTypes

export const getCartItemsSaga = () => {
    return({
        type: cartTypes.getCartItemsSaga,
    })
} 

export const getCartItems = (shoppingItems) => {
    return({
        type: cartTypes.getCartItems,
        payload: shoppingItems
    })
}

export const addCartItemSaga = (id) => {
    return({
        type: cartTypes.addCartItemSaga,
        payload : id
    })
} 


export const addCartItem = (shoppingItem) => {
    return({
        type: cartTypes.addCartItem,
        payload: shoppingItem
    })
}

export const deleteCartItemSaga = (id) => {
    return({
        type: cartTypes.deleteCartItemSaga,
        payload : id
    })
} 


export const deleteCartItem = (shoppingItem) => {
    return({
        type: cartTypes.deleteCartItem,
        payload: shoppingItem
    })
}