const SET_MENU_OPEN = 'SET_MENU_OPEN';

interface SetMenuOpenAction {
    type: typeof SET_MENU_OPEN;
    payload: boolean;
}

export type MainPageActions = SetMenuOpenAction;

const setMenuOpen = (payload: boolean): MainPageActions => ({
    type: SET_MENU_OPEN,
    payload
});

export { setMenuOpen, SET_MENU_OPEN };
