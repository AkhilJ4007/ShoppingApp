const userTypes = require("./userTypes").userTypes

const INITIAL_STATE = {
    user : null,
    token : null
}

const userReducer = (state = INITIAL_STATE, action) => {
    //console.log("In userReducer",action.payload)
    switch(action.type) {
        // all login types can use this

        case userTypes.getUser:
            return {
                ...state,
                user : action.payload,
            };

        case userTypes.tokenSet:
            return {
                ...state,
                token : action.payload,
            };

        case userTypes.logout :
            if(action.payload){
                return {
                    ...state,
                    user : null
                }
            };
            break;
        
        default :
            return state;
    }

}

export default userReducer;