import { put, call, takeEvery } from 'redux-saga/effects';
import {
    GET_USER,
    getUserFailure,
    getUserRequested,
    getUserSuccess
} from '../actions/auth-handler-actions';
import { AxiosError } from 'axios';
import { getUser } from '../../../rest-handlers/auth';
import { User } from '../../../lib/types/general-types';

function* getUserAsync() {
    try {
        yield put(getUserRequested());
        const response: User = yield call(() => getUser());
        yield put(getUserSuccess(response));
    } catch (error) {
        const err = error as AxiosError;
        const errMessage = err.message || 'Something went wrong. Please try again later';
        yield put(getUserFailure(errMessage));
    }
}

export function* watchGetUserAsync() {
    yield takeEvery(GET_USER, getUserAsync);
}
