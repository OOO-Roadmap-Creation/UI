import { LoginPayload } from '../types/general-types';

const LOGIN_USER = 'LOGIN_USER';
const LOGIN_USER_REQUESTED = 'LOGIN_USER_REQUESTED';
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const CLEAR_ERROR = 'CLEAR_ERROR';

interface ClearErrorAction {
    type: typeof CLEAR_ERROR;
}

export interface LoginUserAction {
    type: typeof LOGIN_USER;
    payload: LoginPayload;

    onSuccess?: () => void;
}

interface LoginUserRequestedAction {
    type: typeof LOGIN_USER_REQUESTED;
}

interface LoginUserSuccessAction {
    type: typeof LOGIN_USER_SUCCESS;
}

interface LoginUserFailureAction {
    type: typeof LOGIN_USER_FAILURE;
    error: string;
}

export type LoginFormActions =
    | LoginUserRequestedAction
    | LoginUserSuccessAction
    | LoginUserFailureAction
    | ClearErrorAction;

const clearError = (): LoginFormActions => ({
    type: CLEAR_ERROR
});

const loginUser = (payload: LoginPayload, onSuccess?: () => void): LoginUserAction => ({
    type: LOGIN_USER,
    payload,
    onSuccess
});

const loginUserRequested = (): LoginFormActions => ({
    type: LOGIN_USER_REQUESTED
});

const loginUserSuccess = (): LoginFormActions => ({
    type: LOGIN_USER_SUCCESS
});

const loginUserFailure = (error: string): LoginFormActions => ({
    type: LOGIN_USER_FAILURE,
    error
});

export {
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_REQUESTED,
    LOGIN_USER,
    CLEAR_ERROR,
    clearError,
    loginUser,
    loginUserFailure,
    loginUserRequested,
    loginUserSuccess
};
