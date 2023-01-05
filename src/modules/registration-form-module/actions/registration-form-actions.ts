import {RegistrationPayload} from "../types/general-types";

const REGISTER_USER = 'REGISTER_USER';
const REGISTER_USER_REQUESTED = 'REGISTER_USER_REQUESTED';
const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';

export interface RegisterUserAction {
    type: typeof REGISTER_USER;
    payload: RegistrationPayload
}

interface RegisterUserRequestedAction {
    type: typeof REGISTER_USER_REQUESTED;
}

interface RegisterUserSuccessAction {
    type: typeof REGISTER_USER_SUCCESS;
}

interface RegisterUserFailureAction {
    type: typeof REGISTER_USER_FAILURE;
    error: string;
}

export type RegistrationFormActions =
    | RegisterUserRequestedAction
    | RegisterUserSuccessAction
    | RegisterUserFailureAction;

const registerUser = (payload: RegistrationPayload): RegisterUserAction => ({
    type: REGISTER_USER,
    payload
});

const registerUserRequested = (): RegistrationFormActions => ({
    type: REGISTER_USER_REQUESTED
});

const registerUserSuccess = (): RegistrationFormActions => ({
    type: REGISTER_USER_SUCCESS
});

const registerUserFailure = (error: string): RegistrationFormActions => ({
    type: REGISTER_USER_FAILURE,
    error
});

export {
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_REQUESTED,
    REGISTER_USER,
    registerUser,
    registerUserFailure,
    registerUserRequested,
    registerUserSuccess
};
