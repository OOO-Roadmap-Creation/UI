import { put, call, takeEvery } from 'redux-saga/effects';
import {
    REGISTER_USER,
    registerUserRequested,
    registerUserSuccess,
    registerUserFailure,
    RegisterUserAction
} from '../actions/registration-form-actions';
import { register } from '../../../rest-handlers';
import { AxiosError } from 'axios';

function* registerUserAsync(action: RegisterUserAction) {
    const { payload, onSuccess } = action;
    try {
        yield put(registerUserRequested());
        yield call(() => {
            return register(payload);
        });
        yield put(registerUserSuccess());
        if (onSuccess) {
            yield call(() => onSuccess());
        }
    } catch (error) {
        const err = error as AxiosError;
        const errMessage = err.message || 'Something went wrong. Please try again later';
        yield put(registerUserFailure(errMessage));
    }
}

export function* watchRegisterUserAsync() {
    yield takeEvery(REGISTER_USER, registerUserAsync);
}
