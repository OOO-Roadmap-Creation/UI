import { TreeNode } from '../types/request-types';
import { RoadmapEntity } from '../types/general-types';

const CREATE_ROADMAP = 'CREATE_ROADMAP';
const CREATE_ROADMAP_REQUESTED = 'CREATE_ROADMAP_REQUESTED';
const CREATE_ROADMAP_FAILURE = 'CREATE_ROADMAP_FAILURE';
const CREATE_ROADMAP_SUCCESS = 'CREATE_ROADMAP_SUCCESS';

export interface RoadmapCreationAction {
    type: typeof CREATE_ROADMAP;
    payload: {
        roadmapData: RoadmapEntity;
        nodeData: TreeNode;
    };
    onSuccess?: () => void;
}

interface RoadmapCreationRequestedAction {
    type: typeof CREATE_ROADMAP_REQUESTED;
}

interface RoadmapCreationSuccessAction {
    type: typeof CREATE_ROADMAP_SUCCESS;
}

interface RoadmapCreationFailureAction {
    type: typeof CREATE_ROADMAP_FAILURE;
    error: string;
}

export type RoadmapCreationActions =
    | RoadmapCreationRequestedAction
    | RoadmapCreationSuccessAction
    | RoadmapCreationFailureAction;

const roadmapCreation = (
    roadmapData: RoadmapEntity,
    nodeData: TreeNode,
    onSuccess?: () => void
): RoadmapCreationAction => ({
    type: CREATE_ROADMAP,
    payload: {
        roadmapData,
        nodeData
    },
    onSuccess
});

const roadmapCreationRequested = (): RoadmapCreationActions => ({
    type: CREATE_ROADMAP_REQUESTED
});

const roadmapCreationSuccess = (): RoadmapCreationActions => ({
    type: CREATE_ROADMAP_SUCCESS
});

const roadmapCreationFailure = (error: string): RoadmapCreationActions => ({
    type: CREATE_ROADMAP_FAILURE,
    error
});

export {
    CREATE_ROADMAP_FAILURE,
    CREATE_ROADMAP_SUCCESS,
    CREATE_ROADMAP_REQUESTED,
    CREATE_ROADMAP,
    roadmapCreation,
    roadmapCreationFailure,
    roadmapCreationRequested,
    roadmapCreationSuccess
};
