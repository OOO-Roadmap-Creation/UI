import { SagaMiddleware } from 'redux-saga';

import watchRegisterUserAsync from '../modules/registration-form-module/sagas';
import watchLoginUserAsync from '../modules/login-form-module/sagas';
import watchGetUserAsync from '../modules/auth-handler/sagas';

const runAllSagas = (sagaMiddleware: SagaMiddleware) => {
    sagaMiddleware.run(watchRegisterUserAsync);
    sagaMiddleware.run(watchLoginUserAsync);
    sagaMiddleware.run(watchGetUserAsync);
};

export { runAllSagas };
