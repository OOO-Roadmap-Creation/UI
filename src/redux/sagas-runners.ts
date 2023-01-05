import { watchRegisterUserAsync } from '../modules/registration-form-module/sagas/register-user';
import { SagaMiddleware } from 'redux-saga';
import { watchLoginUserAsync } from '../modules/login-form-module/sagas/login-user';

const runAllSagas = (sagaMiddleware: SagaMiddleware) => {
    sagaMiddleware.run(watchRegisterUserAsync);
    sagaMiddleware.run(watchLoginUserAsync);
};

export { runAllSagas };
