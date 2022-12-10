import { sagaMiddleware } from './store';
import { watchRegisterUserAsync } from '../modules/registration-form-module/sagas/register-user';

sagaMiddleware.run(watchRegisterUserAsync);
