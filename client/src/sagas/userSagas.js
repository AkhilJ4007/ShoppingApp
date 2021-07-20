// Import the redux-saga/effects
import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects'
const axios = require("../axios")
const userTypes = require("../redux/user/userTypes").userTypes
const alertTypes = require("../redux/alerts/alerts.types").alertTypes
// Here's the unique part, generator function*, function with asterisk(*)
  // Get Todos
function* getUser() {
    const user = yield call(axios.getUser)
    console.log("User ",user)
    yield put({ type: userTypes.getUser, payload: user })
}

function* login(action) {
  const user = yield call(axios.login(action.payload))
  if(user instanceof Error){
    console.log("In Error",user.message)
      yield put({ type: alertTypes.alert, payload: user.message })
  }
  else {
    //console.log(user)
    yield put({ type: userTypes.tokenSet, payload: user.token })
    yield put({ type: userTypes.getUser, payload: user.user })
  }

}

function* signUp(action) {
  //console.log("In Sign up saga",action.payload)
  const user = yield call(axios.signUp(action.payload))
  if(user instanceof Error){
    console.log("In Error")
      yield put({ type: alertTypes.alert, payload: user.message })
  }
  else{
    //console.log(user)
    yield put({ type: userTypes.tokenSet, payload: user.token })
    yield put({ type: userTypes.getUser, payload: user.user })
    yield put({ type: alertTypes.alert, payload: "Account created" })
  }



}

function* logout() {
  const logout = yield call(axios.logout)
  if(logout){
    yield put({type: userTypes.logout, payload: true})
  }
}





// Export the saga (store-saga)
export default function* userSaga() {

yield takeEvery(userTypes.getUserSaga, getUser)
yield takeEvery(userTypes.loginSaga, login)
yield takeEvery(userTypes.logoutSaga, logout)
yield takeEvery(userTypes.signUpSaga, signUp)
}