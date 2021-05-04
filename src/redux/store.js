import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// This is the middleware that we gonna use redux-saga
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'


// This is the root saga that will contain our sagas, or I should say model? XD
import rootSaga from '../rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// Run redux-saga
sagaMiddleware.run(rootSaga)

export default store;
