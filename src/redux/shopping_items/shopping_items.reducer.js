const shoppingTypes = require("./shopping_items.types").shoppingTypes

const INITIAL_STATE = {
    shoppingItems : [],
    selectedItem: null,
    loading: false
}

const shoppingItemsReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case shoppingTypes.getShoppingItems:
            return {
                ...state,
                shoppingItems : action.payload,
                loading: false
            };
        case shoppingTypes.setLoading:
            return {
                ...state,
                loading : true
            }
        case shoppingTypes.getShoppingItem:
            return {
                ...state,
                selectedItem : action.payload,
                loading: false
            }
        
        default :
            return state;
    }

}

export default shoppingItemsReducer;
