import {
    EDIT_USER_INFORMATION_FAILURE,
    EDIT_USER_INFORMATION_REQUESTED,
    EDIT_USER_INFORMATION_SUCCESS,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_REQUESTED,
    LOGOUT_USER_SUCCESS,
    PersonalPageActions
} from '../actions/personal-page';

export interface PersonalPageState {
    loading: boolean;
}

const initialState: PersonalPageState = {
    loading: false
};

const personalPageReducer = (
    state: PersonalPageState = initialState,
    action: PersonalPageActions
): PersonalPageState => {
    switch (action.type) {
        case EDIT_USER_INFORMATION_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case EDIT_USER_INFORMATION_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case EDIT_USER_INFORMATION_FAILURE:
            return {
                ...state,
                loading: false
            }
        case LOGOUT_USER_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case LOGOUT_USER_FAILURE:
            return {
                ...state,
                loading: false
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                loading: true
            }
        default: {
            return state;
        }
    }
};

export default personalPageReducer;
