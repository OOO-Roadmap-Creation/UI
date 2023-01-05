import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { registrationFormReducer } from '../modules/registration-form-module';
import { runAllSagas } from './sagas-runners';

const combinedReducers = combineReducers({
    registrationForm: registrationFormReducer
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

runAllSagas(sagaMiddleware);

export default store;
