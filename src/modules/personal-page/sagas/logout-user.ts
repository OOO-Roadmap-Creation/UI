import { put, call, takeEvery } from 'redux-saga/effects';
import {
    LOGOUT_USER,
    logoutUserFailure,
    logoutUserSuccess,
    logoutUserRequested,
    LogoutUserAction
} from '../actions/personal-page';
import { logout } from '../../../rest-handlers/auth';

function* logoutUserAsync(action: LogoutUserAction) {
    const { onSuccess } = action;
    try {
        yield put(logoutUserRequested());
        yield call(() => logout());
        yield put(logoutUserSuccess());
        if (onSuccess) {
            yield call(() => onSuccess());
        }
    } catch (error) {
        // todo add error modal
        // const err = error as AxiosError;
        // const errMessage = err.message || 'Something went wrong. Please try again later';
        yield put(logoutUserFailure());
    }
}

export function* watchLogoutUserAsync() {
    yield takeEvery(LOGOUT_USER, logoutUserAsync);
}
