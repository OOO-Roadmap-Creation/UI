import React from 'react';
import { Handle, Position } from 'reactflow';
import Node from '../../../../lib/styled-components/node';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import colors from '../../../../lib/styled-components/colors';

interface CommonNodeProps {
    data: {
        title: string;
        setSelectedNodeId: React.Dispatch<React.SetStateAction<string | null>>;
        deleteNode: (id: string) => void;
        description: string
    };
    id: string;
    selected?: boolean;
}

const EndNode = (props: CommonNodeProps) => {
    const { data, id, selected } = props;
    const { setSelectedNodeId, title, deleteNode } = data;

    return (
        <>
            <Handle type="source" position={Position.Right} title="From" />
            <Node
                $isSelected={selected}
                $closable
                onClick={() => setSelectedNodeId((prev) => (prev === id ? null : id))}>
                <div className="text-container">{title}</div>
            </Node>
            <DeletionButton className="delete-btn" onClick={() => deleteNode(id)}>
                <CloseOutlined />
            </DeletionButton>
            <Handle type="target" position={Position.Left} title="To"/>
        </>
    );
};

const DeletionButton = styled.div`
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;

    svg {
        fill: ${colors.white};
        opacity: 0.5;
        width: 10px;
        height: 10px;
    }

    :hover {
        svg {
            opacity: 1;
        }
    }
`;

export default EndNode;
