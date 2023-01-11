import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, {
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    addEdge,
    NodeChange,
    EdgeChange,
    Connection,
    FitViewOptions,
    Node,
    Edge,
    NodeRemoveChange
} from 'reactflow';
import styled from 'styled-components';
import EndNode from './nodes/end-node';
import CommonNode from './nodes/common-node';
import { NodeEntity } from '../types/general-types';
import colors from '../../../lib/styled-components/colors';

interface CreationComponentProps {
    lastId: number;
    setSelectedNodeId: React.Dispatch<React.SetStateAction<string | null>>;
    selectedNodeId: string | null;
    setNodesFieldsValue: (values: NodeEntity) => void;
    nodeFieldsValue: NodeEntity;
    nodes: Node[];
    edges: Edge[];
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
}

const fitViewOptions: FitViewOptions = {
    padding: 0.2
};

const CreationComponent = (props: CreationComponentProps) => {
    const {
        lastId,
        setSelectedNodeId,
        selectedNodeId,
        setNodesFieldsValue,
        nodeFieldsValue,
        setNodes,
        nodes,
        edges,
        setEdges
    } = props;

    const [prevLastId, setPrevLastId] = useState(lastId);

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => {
            // @ts-ignore
            const removeChanges: NodeRemoveChange[] = changes.filter((c) => c.type === 'remove');
            removeChanges.forEach(({ id }) => {
                setEdges((edges) => {
                    const edgesWithDeletedNode = edges.filter(
                        (e) => e.source === id || e.target === id
                    );
                    const edgesChanges: EdgeChange[] = edgesWithDeletedNode.map((e) => ({
                        id: e.id,
                        type: 'remove'
                    }));
                    return applyEdgeChanges(edgesChanges, edges);
                });
            });
            setNodes((nds) => applyNodeChanges(changes, nds));
        },
        [setEdges, setNodes]
    );

    const onConnect = useCallback(
        (params: Connection) => {
            const { source } = params;
            const nodeWithActualSource = edges.find((e) => e.source === source);
            if (!nodeWithActualSource) {
                setEdges((eds) =>
                    addEdge(
                        {
                            ...params,
                            sourceHandle: ''
                        },
                        eds
                    )
                );
            }
        },
        [setEdges, edges]
    );

    const onEdgeDoubleClick = useCallback(
        (evt: any, edge: Edge) => {
            const changes: EdgeChange[] = [
                {
                    id: edge.id,
                    type: 'remove'
                }
            ];
            setEdges((eds) => applyEdgeChanges(changes, eds));
        },
        [setEdges]
    );

    const nodeTypes = useMemo(() => ({ endNode: EndNode, commonNode: CommonNode }), []);

    useEffect(() => {
        setNodes((nds) => {
            const changes: NodeChange[] = [];
            const nextSelectedNode = nds.find((n) => n.id === selectedNodeId);
            const prevSelectedNode = nds.find((n) => n.selected && n.id !== selectedNodeId);

            if (nextSelectedNode) {
                changes.push({
                    id: nextSelectedNode.id,
                    type: 'select',
                    selected: true
                });
            }
            if (prevSelectedNode) {
                changes.push({
                    id: prevSelectedNode.id,
                    type: 'select',
                    selected: false
                });
            }
            return applyNodeChanges(changes, nds);
        });
    }, [selectedNodeId, setNodes]);

    useEffect(() => {
        if (selectedNodeId) {
            const selectedNode = nodes.find((n) => n.id === selectedNodeId);
            selectedNode &&
                setNodesFieldsValue({
                    title: selectedNode.data.title,
                    description: selectedNode.data.description
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedNodeId, setNodesFieldsValue]);

    useEffect(() => {
        if (selectedNodeId) {
            setNodes((nodes) => {
                return nodes.map((n) =>
                    n.id === selectedNodeId
                        ? {
                              ...n,
                              data: {
                                  ...n.data,
                                  title: nodeFieldsValue.title,
                                  description: nodeFieldsValue.description
                              }
                          }
                        : n
                );
            });
        }
    }, [nodeFieldsValue.title, nodeFieldsValue.description, selectedNodeId, setNodes]);

    const deleteNode = useCallback(
        (id: string) => {
            setSelectedNodeId(null);
            const changes: NodeChange[] = [
                {
                    id,
                    type: 'remove'
                }
            ];
            onNodesChange(changes);
        },
        [onNodesChange, setSelectedNodeId]
    );

    useEffect(() => {
        if (lastId !== prevLastId) {
            setPrevLastId(lastId);
            setNodes((nds) => {
                return [
                    ...nds,
                    {
                        id: `${lastId}`,
                        position: { y: 0, x: 0 },
                        type: 'commonNode',
                        selectable: false,
                        data: {
                            title: 'Describe Milestone Title',
                            setSelectedNodeId,
                            deleteNode
                        }
                    }
                ];
            });
        }
    }, [deleteNode, lastId, prevLastId, setNodes, setSelectedNodeId]);

    return (
        <FlowWrapper>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onEdgeDoubleClick={onEdgeDoubleClick}
                onConnect={onConnect}
                fitView
                fitViewOptions={fitViewOptions}
                nodeTypes={nodeTypes}>
                <Background />
            </ReactFlow>
        </FlowWrapper>
    );
};

const FlowWrapper = styled.div`
    height: 100%;
    .react-flow__attribution {
        display: none;
    }

    .react-flow__edge.selected .react-flow__edge-path,
    .react-flow__edge:focus .react-flow__edge-path,
    .react-flow__edge:focus-visible .react-flow__edge-path {
        stroke: ${colors.violet} !important;
    }
`;

export default CreationComponent;
