import { put, call, takeEvery } from 'redux-saga/effects';
import {
    REGISTER_USER,
    registerUserRequested,
    registerUserSuccess,
    registerUserFailure,
    RegisterUserAction
} from '../actions/registration-form-actions';
import { registration } from '../../../rest-handlers';

function* registerUserAsync(action: RegisterUserAction) {
    try {
        yield put(registerUserRequested());
        // todo resolve error is it is possible
        // @ts-ignore
        const response: any = yield call(() => {
            return registration({})
        });
        yield put(registerUserSuccess());
    } catch (error) {
        yield put(registerUserFailure(error as string));
    }
}

export function* watchRegisterUserAsync() {
    yield takeEvery(REGISTER_USER, registerUserAsync);
}
