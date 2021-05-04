import { all, call } from 'redux-saga/effects'
import storeSaga from "./sagas/storeSagas"
import userSaga from "./sagas/userSagas"
import cartSaga from './sagas/cartSagas'
export default function* rootSaga() {
    yield all([
        storeSaga(),
        userSaga(),
        cartSaga()
    ])
}