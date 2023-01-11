import { put, call, takeEvery } from 'redux-saga/effects';
import {
    CREATE_ROADMAP,
    RoadmapCreationAction,
    roadmapCreationRequested,
    roadmapCreationSuccess,
    roadmapCreationFailure
} from '../actions/roadmap-creation';
import { createNode, createRoadmap } from '../../../rest-handlers';
import { AxiosError } from 'axios';
import { RequestNode, TreeNode } from '../types/request-types';


interface RawNode {
    node: TreeNode;
    rawParent: number | null;
    rawId: number;
    parent: number | null | undefined;
}
function* createRoadmapAsync(action: RoadmapCreationAction) {
    const { payload, onSuccess } = action;
    try {
        yield put(roadmapCreationRequested());
        const { roadmapData, nodeData } = payload;
        const { id: roadmapId }: { id: number } = yield call(() => {
            return createRoadmap(roadmapData);
        });

        const queue: RawNode[] = [];
        const root = { node: nodeData, rawParent: null, rawId: 0, parent: undefined };
        queue.push(root);
        let actualRawId = 1;
        const rawNodes: RawNode[] = [];

        while (queue.length) {
            const queueItem = queue.shift();
            if (!queueItem) {
                continue;
            }
            if(!queueItem.node?.child?.length) {
                rawNodes.push(queueItem);
            } else {
                for (let i = 0; i < (queueItem.node.child.length || 0); i++) {
                    queue.push({
                        node: queueItem.node.child[i],
                        rawParent: queueItem.rawId,
                        rawId: actualRawId,
                        parent: undefined
                    });
                    actualRawId += 1;
                }
                rawNodes.push(queueItem);
            }
        }

        for (let i = 0; i < rawNodes.length; i += 1) {
            const rawNode = rawNodes[i];
            const requestNode: RequestNode = {
                roadmapId,
                description: rawNode.node.description || '',
                priority: 0,
                title: rawNode.node.title,
                parentId: rawNode.parent || undefined,
            };
            const { id } = yield call(() => createNode(requestNode));

            for (let j = i; j < rawNodes.length; j += 1) {
                const internalRowNode = rawNodes[j];
                if (internalRowNode.rawParent === rawNode.rawId) {
                    internalRowNode.parent = id;
                }
            }
        }

        yield put(roadmapCreationSuccess());
        if (onSuccess) {
            yield call(() => onSuccess());
        }
    } catch (error) {
        const err = error as AxiosError;
        const errMessage = err.message || 'Something went wrong. Please try again later';
        yield put(roadmapCreationFailure(errMessage));
    }
}

export function* watchCreateRoadmapAsync() {
    yield takeEvery(CREATE_ROADMAP, createRoadmapAsync);
}
