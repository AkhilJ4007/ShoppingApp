const alertTypes = require("./alerts.types").alertTypes

const INITIAL_STATE = {
    message : "",
    toggle : false,
}

const alertReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case alertTypes.alert:
            return {
                ...state,
                message : action.payload,
                toggle : true
            };
        
        case alertTypes.alertDismiss:
            return {
                ...state,
                message : "",
                toggle : false
            };
        
        
        
        default :
            return state;
    }

}

export default alertReducer;
