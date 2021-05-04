import {userTypes} from './userTypes'

export const getUserSaga = () => {
    return({
        type: userTypes.getUserSaga
    })
} 

export const loginSaga = () => {
    return({
        type: userTypes.loginSaga
    })
} 

export const googleLoginSaga = () => {

    return({
        type: userTypes.googleLoginSaga
    })
} 


export const logoutSaga = () => {
    return({
        type: userTypes.logoutSaga
    })
} 