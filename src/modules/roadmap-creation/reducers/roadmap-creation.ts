import {
    CREATE_ROADMAP_FAILURE,
    CREATE_ROADMAP_REQUESTED,
    CREATE_ROADMAP_SUCCESS,
    RoadmapCreationActions
} from '../actions/roadmap-creation';

export interface RoadmapCreationState {
    loading: boolean;
}

const initialState: RoadmapCreationState = {
    loading: false
};

const roadmapCreationReducer = (
    state: RoadmapCreationState = initialState,
    action: RoadmapCreationActions
) => {
    switch (action.type) {
        case CREATE_ROADMAP_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case CREATE_ROADMAP_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case CREATE_ROADMAP_FAILURE:
            return {
                ...state,
                loading: false
            };
        default: {
            return state;
        }
    }
};

export default roadmapCreationReducer;
