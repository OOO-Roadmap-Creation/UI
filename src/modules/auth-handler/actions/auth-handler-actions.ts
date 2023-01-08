import { User } from '../../../lib/types/general-types';

const GET_USER = 'GET_USER';
const GET_USER_REQUESTED = 'GET_USER_REQUESTED';
const GET_USER_FAILURE = 'GET_USER_FAILURE';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export interface GetUserAction {
    type: typeof GET_USER;
}

interface GetUserRequestedAction {
    type: typeof GET_USER_REQUESTED;
}

interface GetUserSuccessAction {
    type: typeof GET_USER_SUCCESS;
    payload: User;
}

interface GetUserFailureAction {
    type: typeof GET_USER_FAILURE;
    error: string;
}

export type GetUserActions = GetUserRequestedAction | GetUserSuccessAction | GetUserFailureAction;

const getUser = (): GetUserAction => ({
    type: GET_USER
});

const getUserRequested = (): GetUserActions => ({
    type: GET_USER_REQUESTED
});

const getUserSuccess = (payload: User): GetUserActions => ({
    type: GET_USER_SUCCESS,
    payload
});

const getUserFailure = (error: string): GetUserActions => ({
    type: GET_USER_FAILURE,
    error
});

export {
    GET_USER_FAILURE,
    GET_USER_SUCCESS,
    GET_USER_REQUESTED,
    GET_USER,
    getUser,
    getUserFailure,
    getUserRequested,
    getUserSuccess
};
