import {
    GET_USER_FAILURE,
    GET_USER_REQUESTED,
    GET_USER_SUCCESS,
    GetUserActions
} from '../actions/auth-handler-actions';
import { User } from '../../../lib/types/general-types';

export interface AuthHandlerState {
    initialAuthHandled: boolean;
    userInformation: User | null;
}

const initialState: AuthHandlerState = {
    initialAuthHandled: false,
    userInformation: null
};

const authHandlerReducer = (state: AuthHandlerState = initialState, action: GetUserActions): AuthHandlerState => {
    switch (action.type) {
        case GET_USER_REQUESTED:
            return {
                ...state
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                initialAuthHandled: true,
                userInformation: action.payload
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                initialAuthHandled: true,
                userInformation: null
            };
        default: {
            return state;
        }
    }
};

export default authHandlerReducer;
