import {
    SET_MENU_OPEN,
    MainPageActions
} from '../actions/main-page';

export interface MainPageState {
    isMenuOpen: boolean
}

const initialState: MainPageState = {
    isMenuOpen: false,
};

const mainPageReducer = (
    state: MainPageState = initialState,
    action: MainPageActions
) => {
    switch (action.type) {
        case SET_MENU_OPEN:
            return {
                ...state,
                isMenuOpen: action.payload
            };
        default: {
            return state;
        }
    }
};

export default mainPageReducer;
