import React, { useMemo } from 'react';
import { Handle, Position } from 'reactflow';
import Node from '../../../../lib/styled-components/node';

interface EndNodeProps {
    data: { title: any; startedNode?: boolean };
}

const EndNode = (props: EndNodeProps) => {
    const { data } = props;

    const connection = useMemo(() => {
        return data.startedNode ? (
            <Handle type="source" position={Position.Right} title="From" />
        ) : (
            <Handle type="target" position={Position.Left} title="To" />
        );
    }, [data]);

    return (
        <>
            <Node>
                <div className="text-container">{data.title}</div>
            </Node>
            {connection}
        </>
    );
};

export default EndNode;
