import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_REQUESTED,
    LoginFormActions, CLEAR_ERROR
} from '../actions/login-form-actions';

export interface LoginFormState {
    loading: boolean;
    error: string | null;
}

const initialState: LoginFormState = {
    loading: false,
    error: null
};

const loginFormReducer = (
    state: LoginFormState = initialState,
    action: LoginFormActions
) => {
    switch (action.type) {
        case LOGIN_USER_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default: {
            return state;
        }
    }
};

export default loginFormReducer;
