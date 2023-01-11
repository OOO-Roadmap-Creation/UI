import { TreeNode } from '../types/request-types';
import { Edge, Node } from 'reactflow';


const createTreeNode = (root: Node, nodes: Node[], edges: Edge[]): TreeNode => {
    // @ts-ignore
    const rootChildIds: string[] = edges.filter((e) => e.target === root.id).map((e) => e.source);
    const rootChild: Node[] = nodes.filter((n) => !!rootChildIds.find(id => id === n.id));

    return {
        title: root.data.title,
        description: root.data.description,
        child: rootChild.map((rc) => createTreeNode(rc, nodes, edges))
    };
};

export { createTreeNode };
