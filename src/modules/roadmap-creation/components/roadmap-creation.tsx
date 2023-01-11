import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import colors from '../../../lib/styled-components/colors';
import { LeftOutlined, PlusOutlined } from '@ant-design/icons';
import { RoadmapEntity } from '../types/general-types';
import RoadmapFieldsForm from './roadmap-fields-form';
import CreationComponent from './creation-component';
import { useNavigate } from 'react-router-dom';
import StyledButton from '../../../lib/styled-components/styled-button';
import { TreeNode } from '../types/request-types';
import { Edge, Node } from 'reactflow';
import { createTreeNode } from '../utils/utils';

interface RoadmapCreationProps {
    loading: boolean;
    roadmapCreation: (
        roadmapData: RoadmapEntity,
        nodeData: TreeNode,
        onSuccess?: () => void
    ) => void;
}

const initialNodesState = [
    {
        id: 'begin',
        type: 'endNode',
        selectable: false,
        position: { x: 0, y: 0 },
        data: { title: 'Begin', description: '', startedNode: true }
    },
    {
        id: 'end',
        type: 'endNode',
        selectable: false,
        position: { x: 500, y: 0 },
        data: { title: 'End', description: '' }
    }
];

const RoadmapCreation = (props: RoadmapCreationProps) => {
    const { roadmapCreation, loading } = props;
    const navigate = useNavigate();
    const [roadmapFieldsValue, setRoadmapFieldsValue] = useState<RoadmapEntity>({
        title: 'My Roadmap',
        description: ''
    });
    const [nodeFieldsValue, setNodesFieldsValue] = useState<RoadmapEntity>({
        title: '',
        description: ''
    });
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    const [lastId, setLastId] = useState(0);
    const [nodes, setNodes] = useState<Node[]>(initialNodesState);
    const [edges, setEdges] = useState<Edge[]>([]);

    useEffect(() => {
        return () => {
            setNodes(initialNodesState);
            setEdges([]);
        };
    }, []);

    const createRoadmap = useCallback(() => {
        const endNode = nodes.find((n) => n.id === 'end');
        if (endNode) {
            roadmapCreation(roadmapFieldsValue, createTreeNode(endNode, nodes, edges), () => {
                navigate('/general/personal');
            });
        }
    }, [edges, navigate, nodes, roadmapCreation, roadmapFieldsValue]);

    const isSaveAvailable: boolean = useMemo(() => {
        const roadmapTitleValue = roadmapFieldsValue.title?.length > 0;
        const connectionsCheck = nodes.length - 1 === edges.length && nodes.length > 2;
        return roadmapTitleValue && connectionsCheck;
    }, [edges.length, nodes.length, roadmapFieldsValue.title?.length]);

    return (
        <MainWrapper>
            <CreationComponent
                lastId={lastId}
                setSelectedNodeId={setSelectedNodeId}
                selectedNodeId={selectedNodeId}
                setNodesFieldsValue={setNodesFieldsValue}
                nodeFieldsValue={nodeFieldsValue}
                setEdges={setEdges}
                setNodes={setNodes}
                nodes={nodes}
                edges={edges}
            />
            <RoadmapFieldsForm
                setRoadmapFormValue={setRoadmapFieldsValue}
                selectedNodeId={selectedNodeId}
                setNodesFieldsValue={setNodesFieldsValue}
                nodeFieldsValue={nodeFieldsValue}
            />
            <BackButton type="link" onClick={() => navigate('/general/personal')}>
                <LeftOutlinedStyled />
            </BackButton>
            <PlusButton type="link" onClick={() => setLastId((prev) => prev + 1)}>
                <PlusOutlinedStyled />
            </PlusButton>
            <SaveButton
                $isPrimary
                onClick={createRoadmap}
                disabled={!isSaveAvailable}
                loading={loading}>
                Save
            </SaveButton>
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    height: 100%;
    position: relative;
`;

const PlusButton = styled(Button)`
    position: absolute;
    left: 30px;
    bottom: 40px;
    width: 40px;
    height: 40px;
`;

const BackButton = styled(Button)`
    position: absolute;
    left: 30px;
    top: 40px;
    width: 40px;
    height: 40px;
`;

const LeftOutlinedStyled = styled(LeftOutlined)`
    &,
    svg {
        width: 40px;
        height: 40px;
        opacity: 0.5;
        fill: ${colors.white};

        :hover {
            opacity: 1;
        }
    }
`;

const PlusOutlinedStyled = styled(PlusOutlined)`
    &,
    svg {
        width: 40px;
        height: 40px;
        opacity: 0.5;
        fill: ${colors.white};

        :hover {
            opacity: 1;
        }
    }
`;

const SaveButton = styled(StyledButton)`
    position: absolute;
    right: 30px;
    bottom: 40px;
    width: 200px;
    border-color: transparent;

    &:disabled,
    &[disabled] {
        border-color: transparent;
        background-color: ${colors.grayLight};
        color: ${colors.white};
    }

    &:disabled:hover,
    &[disabled]:hover {
        background-color: ${colors.grayLight} !important;
        border-color: transparent !important;
    }
`;
export default RoadmapCreation;
