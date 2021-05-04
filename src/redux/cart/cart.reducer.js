const cartTypes = require("./cart.types").cartTypes

const INITIAL_STATE = {
    cart : null,
    
}

const shoppingItemsReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case cartTypes.getCartItems:
            return {
                ...state,
                cart : action.payload
            };
        
        case cartTypes.addCartItem:
            return {
                ...state,
                cart : action.payload            
            };

        case cartTypes.deleteCartItem:
            return {
                ...state,
                cart : action.payload            
            };
        
        default :
            return state;
    }

}

export default shoppingItemsReducer;
