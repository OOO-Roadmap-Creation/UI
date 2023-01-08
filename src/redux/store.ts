import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { registrationFormReducer } from '../modules/registration-form-module';
import { loginFormReducer } from '../modules/login-form-module';
import { mainPageReducer } from '../modules/main-page';
import { authHandlerReducer } from '../modules/auth-handler';

import { runAllSagas } from './sagas-runners';

const combinedReducers = combineReducers({
    registrationForm: registrationFormReducer,
    loginForm: loginFormReducer,
    mainPage: mainPageReducer,
    authorization: authHandlerReducer
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

runAllSagas(sagaMiddleware);

export default store;
