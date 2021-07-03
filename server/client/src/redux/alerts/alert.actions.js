const alertTypes = require('./alerts.types').alertTypes


export const sendAlert = (alertMessage) => {
    return({
        type: alertTypes.alert,
        payload: alertMessage
    })
}

export const dismissAlert = () => {
    return({
        type: alertTypes.alertDismiss
    })
}

