import { watchRegisterUserAsync } from '../modules/registration-form-module/sagas/register-user';
import { SagaMiddleware } from 'redux-saga';

const runAllSagas = (sagaMiddleware: SagaMiddleware) => {
    sagaMiddleware.run(watchRegisterUserAsync);
};

export { runAllSagas };
