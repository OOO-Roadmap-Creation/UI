import { User } from '../../../lib/types/general-types';

const LOGOUT_USER = 'LOGOUT_USER';
const LOGOUT_USER_REQUESTED = 'LOGOUT_USER_REQUESTED';
const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

const EDIT_USER_INFORMATION = 'EDIT_USER_INFORMATION';
const EDIT_USER_INFORMATION_REQUESTED = 'EDIT_USER_INFORMATION_REQUESTED';
const EDIT_USER_INFORMATION_SUCCESS = 'EDIT_USER_INFORMATION_SUCCESS';
const EDIT_USER_INFORMATION_FAILURE = 'EDIT_USER_INFORMATION_FAILURE';

export interface LogoutUserAction {
    type: typeof LOGOUT_USER;
    onSuccess?: () => void;
}

interface LogoutUserRequestedAction {
    type: typeof LOGOUT_USER_REQUESTED;
}

interface LogoutUserSuccessAction {
    type: typeof LOGOUT_USER_SUCCESS;
}

interface LogoutUserFailureAction {
    type: typeof LOGOUT_USER_FAILURE;
}

export interface EditUserInformationAction {
    type: typeof EDIT_USER_INFORMATION;
    payload: {
        userInformation: User;
    };
}

interface EditUserInformationRequestedAction {
    type: typeof EDIT_USER_INFORMATION_REQUESTED;
}

interface EditUserInformationSuccessAction {
    type: typeof EDIT_USER_INFORMATION_SUCCESS;
}

interface EditUserInformationFailureAction {
    type: typeof EDIT_USER_INFORMATION_FAILURE;
}

export type PersonalPageActions =
    | LogoutUserRequestedAction
    | LogoutUserSuccessAction
    | LogoutUserFailureAction
    | EditUserInformationRequestedAction
    | EditUserInformationSuccessAction
    | EditUserInformationFailureAction;

const logoutUser = (onSuccess?: () => void): LogoutUserAction => ({
    type: LOGOUT_USER,
    onSuccess
});

const logoutUserRequested = (): PersonalPageActions => ({
    type: LOGOUT_USER_REQUESTED
});

const logoutUserSuccess = (): PersonalPageActions => ({
    type: LOGOUT_USER_SUCCESS
});

const logoutUserFailure = (): PersonalPageActions => ({
    type: LOGOUT_USER_FAILURE
});

const editUserInformation = (userInformation: User): EditUserInformationAction => ({
    type: EDIT_USER_INFORMATION,
    payload: {
        userInformation
    }
});

const editUserInformationRequested = (): PersonalPageActions => ({
    type: EDIT_USER_INFORMATION_REQUESTED
});

const editUserInformationSuccess = (): PersonalPageActions => ({
    type: EDIT_USER_INFORMATION_SUCCESS
});

const editUserInformationFailure = (): PersonalPageActions => ({
    type: EDIT_USER_INFORMATION_FAILURE
});

export {
    LOGOUT_USER,
    LOGOUT_USER_REQUESTED,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    EDIT_USER_INFORMATION,
    EDIT_USER_INFORMATION_SUCCESS,
    EDIT_USER_INFORMATION_FAILURE,
    EDIT_USER_INFORMATION_REQUESTED,
    logoutUserSuccess,
    logoutUserRequested,
    logoutUser,
    logoutUserFailure,
    editUserInformation,
    editUserInformationFailure,
    editUserInformationRequested,
    editUserInformationSuccess
};
