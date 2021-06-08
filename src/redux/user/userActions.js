import {userTypes} from './userTypes'

export const getUserSaga = () => {
    return({
        type: userTypes.getUserSaga
    })
} 

export const loginSaga = (userInfo) => {
    return({
        type: userTypes.loginSaga,
        payload: userInfo
    })
} 

export const login = (userInfo) => {
    return({
        type: userTypes.login,
        payload: userInfo
    })
}

export const signUpSaga = (userInfo) => {

    return({
        type: userTypes.signUpSaga,
        payload: userInfo
    })

}

export const signUp = (userInfo) => {

    return({
        type: userTypes.signUp,
        payload: userInfo
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