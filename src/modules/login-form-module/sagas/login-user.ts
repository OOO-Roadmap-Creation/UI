import { put, call, takeEvery } from 'redux-saga/effects';
import {
    LOGIN_USER,
    loginUserSuccess,
    loginUserRequested,
    loginUserFailure,
    LoginUserAction
} from '../actions/login-form-actions';
import { login } from '../../../rest-handlers';
import { AxiosError } from 'axios';
import { getUserSuccess } from '../../auth-handler';
import { User } from '../../../lib/types/general-types';

function* loginUserAsync(action: LoginUserAction) {
    const { payload, onSuccess } = action;
    try {
        yield put(loginUserRequested());
        const response: User = yield call(() => login(payload));
        yield put(loginUserSuccess());
        yield put(getUserSuccess(response));
        if (onSuccess) {
            yield call(() => onSuccess());
        }
    } catch (error) {
        const err = error as AxiosError;
        const errMessage =
            err.status || 0 >= 400
                ? 'Something went wrong. Please try again later'
                : err.message || 'Wrong login or password';
        yield put(loginUserFailure(errMessage));
    }
}

export function* watchLoginUserAsync() {
    yield takeEvery(LOGIN_USER, loginUserAsync);
}
