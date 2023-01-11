import { SagaMiddleware } from 'redux-saga';

import watchRegisterUserAsync from '../modules/registration-form-module/sagas';
import watchLoginUserAsync from '../modules/login-form-module/sagas';
import watchGetUserAsync from '../modules/auth-handler/sagas';
import {
    watchUpdateUserInformationAsync,
    watchLogoutUserAsync
} from '../modules/personal-page/sagas';
import watchCreateRoadmapAsync from '../modules/roadmap-creation/sagas';

const runAllSagas = (sagaMiddleware: SagaMiddleware) => {
    sagaMiddleware.run(watchRegisterUserAsync);
    sagaMiddleware.run(watchLoginUserAsync);
    sagaMiddleware.run(watchGetUserAsync);
    sagaMiddleware.run(watchUpdateUserInformationAsync);
    sagaMiddleware.run(watchLogoutUserAsync);
    sagaMiddleware.run(watchCreateRoadmapAsync);
};

export { runAllSagas };
