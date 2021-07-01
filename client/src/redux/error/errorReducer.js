

const INITIAL_STATE = {
    error: null
}

const shoppingItemsReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case "ERROR":
            return {
                ...state,
                error : action.payload
            }
        default :
            return state;
    }

}

export default shoppingItemsReducer;
