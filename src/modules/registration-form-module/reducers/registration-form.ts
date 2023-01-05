import {
    REGISTER_USER_REQUESTED,
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS,
    RegistrationFormActions
} from '../actions/registration-form-actions';
import { CLEAR_ERROR } from '../../login-form-module/actions/login-form-actions';

export interface RegistrationFormState {
    loading: boolean;
    error: string | null;
}

const initialState: RegistrationFormState = {
    loading: false,
    error: null
};

const registrationFormReducer = (
    state: RegistrationFormState = initialState,
    action: RegistrationFormActions
) => {
    switch (action.type) {
        case REGISTER_USER_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default: {
            return state;
        }
    }
};

export default registrationFormReducer;
