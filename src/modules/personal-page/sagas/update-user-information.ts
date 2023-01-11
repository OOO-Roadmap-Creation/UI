import { put, call, takeEvery } from 'redux-saga/effects';
import {
    EDIT_USER_INFORMATION,
    editUserInformationSuccess,
    editUserInformationRequested,
    editUserInformationFailure,
    EditUserInformationAction
} from '../actions/personal-page';
import { updateUser } from '../../../rest-handlers';
import { User } from '../../../lib/types/general-types';
import { getUserSuccess } from '../../auth-handler';

function* updateUserInformationAsync(action: EditUserInformationAction) {
    const { payload } = action;
    const { userInformation } = payload;
    try {
        yield put(editUserInformationRequested());
        const response: User = yield call(() => updateUser(userInformation));
        yield put(editUserInformationSuccess());
        yield put(getUserSuccess(response));
    } catch (error) {
        // todo add error modal
        // const err = error as AxiosError;
        // const errMessage = err.message || 'Something went wrong. Please try again later';
        yield put(editUserInformationFailure());
    }
}

export function* watchUpdateUserInformationAsync() {
    yield takeEvery(EDIT_USER_INFORMATION, updateUserInformationAsync);
}
